import { defineNuxtPlugin } from '#app'
import { initializeB24Frame } from '@bitrix24/b24jssdk'

/**
 * Connecting api.bitrix24 (singleton)
 */
export default defineNuxtPlugin((_nuxtApp) =>
{
	/**
	 * @memo skip Plugin on server ////
	 */
	if(import.meta.server)
	{
		return;
	}
	
	return {
		provide: {
			initializeB24Frame,
		}
	}
})

