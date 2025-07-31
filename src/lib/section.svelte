<script lang='ts'>
    let { children } = $props();
</script>

<div class='flex flex-col lg:flex-row w-full p-3 md:p-8 justify-center bg-neutral border-[1px] border-primary/20'>
    {@render children()}
</div>