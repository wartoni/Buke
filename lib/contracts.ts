import { CONTRACT_CONFIG } from "./config"

// Helper functions for contract interactions
export function getBaseAddress(): string {
  return CONTRACT_CONFIG.BASE_ADDRESS
}

// Add other contract utility functions here
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}
