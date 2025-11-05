import { settingsQuery, type SettingsData } from '../queries/settings';
import { getClient } from '../sanity.client';

export async function getSettings(): Promise<SettingsData | null> {
  const client = getClient();
  
  try {
    const settings = await client.fetch<SettingsData>(settingsQuery);
    return settings;
  } catch (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
}