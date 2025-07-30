<script lang='ts'>
    let { children } = $props();
</script>

<div class='flex gap-20 p-8 justify-center bg-neutral border-[1px] border-primary/20'>
    {@render children()}
</div>