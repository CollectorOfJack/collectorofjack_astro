export default async (request: Request) => {
    const url = new URL(request.url);
  
    // Check if the "rbmphoto" query parameter exists
    if (url.searchParams.has("rbmphoto")) {
      // Redirect to the clean URL without any query parameters
      return new Response(null, {
        status: 301,
        headers: {
          Location: url.origin + url.pathname, // Removes all query params
        },
      });
    }
  
    // If "rbmphoto" is not present, proceed as normal
    return fetch(request);
  };
  