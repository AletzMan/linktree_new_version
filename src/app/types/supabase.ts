import { FormValue, Network } from "./types";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        id: string;
        username: string;
        full_name: string;
        avatar_url: string;
        website: string;
        links: Network;
        settings: FormValue;
        // Otros campos de la tabla "profiles"
        Rows: {
        [_ in never]: never
      }
      };
      
    }
    
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
