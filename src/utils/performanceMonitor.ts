interface PerformanceMetrics {
  startTime: number;
  endTime?: number;
  duration?: number;
  memoryUsage?: NodeJS.MemoryUsage;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetrics> = new Map();

  start(operation: string): void {
    this.metrics.set(operation, {
      startTime: performance.now(),
      memoryUsage: process.memoryUsage(),
    });
  }

  end(operation: string): PerformanceMetrics | null {
    const metric = this.metrics.get(operation);
    if (!metric) {
      console.warn(`⚠️  Performance metric '${operation}' not found`);
      return null;
    }

    metric.endTime = performance.now();
    metric.duration = metric.endTime - metric.startTime;

    return metric;
  }

  report(operation: string): void {
    const metric = this.metrics.get(operation);
    if (!metric || !metric.duration) {
      console.warn(`⚠️  Performance metric '${operation}' not completed`);
      return;
    }

    const durationMs = metric.duration.toFixed(2);
    const memoryMB = metric.memoryUsage
      ? (metric.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)
      : "N/A";

    console.log(`📊 ${operation}: ${durationMs}ms (Memory: ${memoryMB}MB)`);
  }

  getAllMetrics(): Map<string, PerformanceMetrics> {
    return new Map(this.metrics);
  }

  clear(): void {
    this.metrics.clear();
  }
}

export const performanceMonitor = new PerformanceMonitor();
export default performanceMonitor;
