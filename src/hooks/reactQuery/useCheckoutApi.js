import { QUERY_KEYS } from "constants/query";

import { prop } from "ramda";
import { useQuery, useMutation } from "react-query";
import countriesApi from "src/api/countries";
import ordersApi from "src/api/orders";
import statesApi from "src/api/states";

export const useCreateOrder = () => useMutation(ordersApi.create);
export const useFetchCountries = () =>
  useQuery({
    queryKey: QUERY_KEYS.COUNTRIES,
    queryFn: () => countriesApi.fetch(),
    select: prop("countries"),
    staleTime: Infinity,
  });

export const useFetchStates = stateParams =>
  useQuery({
    queryKey: [QUERY_KEYS.STATES, stateParams],
    queryFn: () => statesApi.fetch(stateParams),
    select: prop("states"),
    staleTime: Infinity,
  });
