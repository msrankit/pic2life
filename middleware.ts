import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const isPublicRoute = createRouteMatcher(['/api/webhooks/clerk'])

export default clerkMiddleware((auth, request) => {
  // publicRoutes: ["/api/:path*"];
  if (!isPublicRoute(request)) {
    auth().protect()
 }
 });

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};