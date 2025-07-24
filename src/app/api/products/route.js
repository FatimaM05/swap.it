import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  const credits = searchParams.get('credits');
  const search = searchParams.get('search')

  const priceMin = parseInt(searchParams.get('priceMin')) || 0;
  const priceMax = parseInt(searchParams.get('priceMax')) || 10000000;

  // Pagination params
  const page = parseInt(searchParams.get('page')) || 1;  
  const limit = parseInt(searchParams.get('limit')) || 9;
  const skip = (page - 1) * limit;

  try {
    let where = {
      price: {
        gte: priceMin,
        lte: priceMax,
      },
    };

    if (category && category !== 'All Categories') {
      where.category = category;
    }
    //searching
    if (search && search.trim() !== '') {
      where = {
        ...where,
        title: {
          contains: search,
          mode: 'insensitive', // case-insensitive
        },
      };
    } 
    if (type) {
      if (type.toLowerCase() === 'buy') {
        where.type = 'BUY';
      } else if (type.toLowerCase() === 'exchange') {
        where.exchange = true;
      } else if (type.toLowerCase() === 'donate') {
        where.type = 'DONATE';
      }
    }

    if (credits && credits !== 'All') {
      where.credits = Number(credits);
    }

    // Get total number of products matching filters (for pagination)
    const totalCount = await prisma.product.count({ where });

    // Fetch only the products for the current page
    const products = await prisma.product.findMany({
      where,
      include: { images: true },
      skip,
      take: limit,
    });

    // Format products - map images urls cleanly
    const formatted = products.map(p => ({
      ...p,
      images: (p.images || []).map(img => img.url).filter(url => url && url.trim() !== ''),
    }));

    // Return data
    return NextResponse.json({
      products: formatted,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
