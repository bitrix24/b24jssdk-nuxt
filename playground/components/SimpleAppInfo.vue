<script setup lang="ts">
import { onMounted, onUnmounted, type Ref, ref, computed } from 'vue'
import type { B24Frame} from '@bitrix24/b24jssdk';
import { LoadDataType, LoggerBrowser, useB24Helper } from '@bitrix24/b24jssdk'

const { $initializeB24Frame } = useNuxtApp()

let $b24: B24Frame
const $logger = LoggerBrowser.build(
	'[playground: jssdk-nuxt] AppInfo',
	true
)
const { initB24Helper, getB24Helper } = useB24Helper()
const isInit: Ref<boolean> = ref(false)
const $isInitB24Helper = ref(false)


onMounted(async () =>
{
	$logger.warn('onMounted >> ')
	
	try
	{
		$b24 = await $initializeB24Frame()
		isInit.value = true
		await initB24Helper(
			$b24,
			[
				LoadDataType.App,
			]
		)
		
		$isInitB24Helper.value = true
		
		isInit.value = true
	}
	catch( error )
	{
		$logger.error(error)
		showError({
			statusCode: 404,
			statusMessage: (error instanceof Error) ? error.message : (error as string),
			cause: error,
			fatal: true
		})
	}
})

onUnmounted(() =>
{
	$logger.warn('onUnmounted << ')
})

const b24Helper = computed(() => {
	if($isInitB24Helper.value)
	{
		return getB24Helper()
	}
	
	return null
})

</script>

<template>
	<div class="">
		<h3>AppInfo</h3>
	</div>
	
	<ClientOnly>
		<div v-if="!isInit">
			Connection to Bitrix24 ...
		</div>
		<div v-else style="background-color: #0f172a; color: greenyellow; padding: 5px 10px">
			<pre>{{ b24Helper?.appInfo.data }}</pre>
		</div>
	</ClientOnly>
</template>