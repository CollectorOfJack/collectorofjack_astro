export default async (request: Request) => {
    const url = new URL(request.url);
  
    // Check if the "rbmphoto" query parameter exists
    if (url.searchParams.has("rbmphoto")) {
      // Remove query parameters
      url.searchParams.delete("rbmphoto");
  
      // Redirect to the clean URL (without the "rbmphoto" parameter)
      return new Response(null, {
        status: 301,
        headers: {
          Location: url.origin + url.pathname,
        },
      });
    }
  
    // If "rbmphoto" is not present, proceed as normal
    return fetch(request);
  };
  