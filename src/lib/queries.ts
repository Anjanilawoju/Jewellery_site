import { supabase } from "./supabase";
import type { Product } from "../data/mockApi";

export interface DbProduct extends Product {
  collection_id: string;
}

export interface DbCollection {
  id: string;
  label: string;
  description?: string;
}

export async function getAllProducts(): Promise<DbProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data || [];
}

export async function getAllCollections(): Promise<DbCollection[]> {
  const { data, error } = await supabase
    .from("collections")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching collections:", error);
    return [];
  }

  return data || [];
}

export async function getProductsByCollection(collectionId: string): Promise<DbProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("collection_id", collectionId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products by collection:", error);
    return [];
  }

  return data || [];
}

export async function getProductsByCategory(category: string): Promise<DbProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }

  return data || [];
}

export async function getProductsBestSellers(): Promise<DbProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("tag", "bestseller")
    .order("reviews", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching best sellers:", error);
    return [];
  }

  return data || [];
}

export async function getProductsNew(): Promise<DbProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("tag", "new")
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching new products:", error);
    return [];
  }

  return data || [];
}
