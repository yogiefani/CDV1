<script lang="ts">
	import type { PageData } from './$types';
    // ambil data dari server.ts 
	export let data: PageData;
</script>

<p>{`Ini Halaman ${data.pageName}`}</p>
