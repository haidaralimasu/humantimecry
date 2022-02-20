import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";
import nftabi from "./NFT.json";
import { formatUnits } from "ethers/lib/utils";

const address = "0x22d276433b3b3566baef76700E7dD054421981Eb";
// const address = "0x60B833CdD6dD38876c93Dd3512A75cC3857F200d";
const nftInterface = new ethers.utils.Interface(nftabi);

export function useTotalSupply() {
  const [totalSupply] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "totalSupply",
      args: [],
    }) ?? [];
  const formatedTotoalSupply = totalSupply ? totalSupply.toNumber() : 0;
  return formatedTotoalSupply;
}

export function useNftPerAddressLimit() {
  const [nftPerAddressLimit] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "nftPerAddressLimit",
      args: [],
    }) ?? [];
  const formatedNftPerAddressLimit = nftPerAddressLimit
    ? nftPerAddressLimit.toNumber()
    : 0;
  return formatedNftPerAddressLimit;
}

export function useMaxSupply() {
  const [maxSupply] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "maxSupply",
      args: [],
    }) ?? [];
  const formatedMaxSupply = maxSupply ? maxSupply.toNumber() : 0;
  return formatedMaxSupply;
}

export function useCost() {
  const [cost] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "cost",
      args: [],
    }) ?? [];
  const formattedCost = cost ? parseFloat(formatUnits(cost, 18)) : 0;
  return formattedCost;
}

export function useWeiCost() {
  const [cost] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "cost",
      args: [],
    }) ?? [];
  return cost;
}

export function useOnlyWhitelisted() {
  const [onlyWhitelisted] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "onlyWhitelisted",
      args: [],
    }) ?? [];
  return onlyWhitelisted;
}

export function useBalanceOf(ownerAddress) {
  const [balanceOf] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "balanceOf",
      args: [ownerAddress],
    }) ?? [];
  const formatedBalanceof = balanceOf ? balanceOf.toNumber() : 0;
  return formatedBalanceof;
}

export function useIsWhitelisted(userAddress) {
  const [isWhitelisted] =
    useContractCall({
      abi: nftInterface,
      address: address,
      method: "isWhitelisted",
      args: [userAddress],
    }) ?? [];
  return isWhitelisted;
}
