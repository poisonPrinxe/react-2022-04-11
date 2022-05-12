import { useCallback, useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";

export const Restaurants = ({ restaurantIds, currentRestaurantId }) => {
  const onTabClick = useCallback((event, id) => {}, []);

  if (!restaurantIds?.length) {
    return null;
  }

  return (
    <div>
      <RestaurantTabsContainer
        selectedId={currentRestaurantId}
        onTabSelect={onTabClick}
      />
      {currentRestaurantId && (
        <RestaurantContainer restaurantId={currentRestaurantId} />
      )}
    </div>
  );
};
