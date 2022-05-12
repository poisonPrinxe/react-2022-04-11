import { useRoute } from "../../custom-routing/hooks/use-route";

export function useCurrentRestaurantId() {
  const route = useRoute();
  const routParts = route.baseRoute.split("/");
  console.log(routParts);

  return routParts[routParts.length - 1];
}
