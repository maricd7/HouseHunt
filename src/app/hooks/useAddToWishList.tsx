import { useState, useEffect, useCallback } from "react";
import { Property } from "../types/Property";

const useAddToWishlist = () => {
  const [wishlist, setWishlist] = useState<Property[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = useCallback((property: Property) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === property.id)) {
        return [...prevWishlist, property];
      }
      return prevWishlist;
    });
  }, []);

  const isInWishlist = useCallback(
    (property: Property) => {
      return wishlist.some((item) => item.id === property.id);
    },
    [wishlist]
  );

  return { wishlist, addToWishlist, isInWishlist };
};

export default useAddToWishlist;
