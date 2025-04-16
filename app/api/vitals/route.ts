import { NextRequest, NextResponse } from 'next/server';

// Define the shape of the Web Vitals metric
interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType: string;
}

/**
 * API route for collecting Web Vitals metrics
 * In a production environment, you would send these to your analytics service
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const metric: WebVitalsMetric = body;

    // In development, log metrics to console
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals:', {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
      });
    }

    // In production, you would send these metrics to your analytics service
    // Example: await fetch('https://your-analytics-endpoint.com', { method: 'POST', body: JSON.stringify(metric) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Web Vitals:', error);
    return NextResponse.json({ success: false, error: 'Failed to process metrics' }, { status: 500 });
  }
}
