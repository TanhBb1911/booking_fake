export type Listing = {
  url: string;
  title: string | null;
  rating: string | null;
  description: string;
  price: string;
  link: string;
  booking_metadata: string;
  rating_word: string | null;
  rating_count: string | null;
};

export type Result = {
  content: {
    listings: Listing[] | null;
    total_listings: string | null;
  };
};
