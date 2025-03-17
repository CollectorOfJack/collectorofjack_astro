export default async (request, context) => {
    const url = new URL(request.url);
    const lowercasePath = url.pathname.toLowerCase();

    // Check if the requested path contains uppercase letters
    if (url.pathname !== lowercasePath) {
        url.pathname = lowercasePath;
        return Response.redirect(url.toString(), 301); // Permanent redirect
    }

    return context.next();
};

export const config = {
    path: "/*" // Apply to all paths
};
