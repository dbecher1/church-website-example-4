<script lang="ts">
    import { CHURCH_INFO } from "$lib";
    let {children = null, ...props} = $props();
</script>

<div class='w-full h-192 overflow-hidden relative font-formal'>
    <img src='/bg1.jpg' alt='Church' class='object-cover min-w-[150%] absolute -left-3/8 -top-5/8 brightness-40 contrast-125 -z-1 bg-black/80'/>
    <div class='flex w-full h-full text-base-100 text-shadow-sm text-shadow-black/40 text-center'>
        <div class='flex flex-col m-auto max-w-1/2 gap-6 bg-black/15 rounded-box p-16'>
            <div class='text-6xl/20 uppercase tracking-wide font-formal'>
                Welcome to {CHURCH_INFO.CHURCH_NAME}
            </div>
            <div class='flex flex-col gap-2'>
                <div class='italic text-red-600 text-3xl/11 w-5/8 mx-auto'>
                    "Come unto me, all ye that labour and are heavy laden, and I will give you rest."
                </div>
                <div class='text-lg'>
                    Matthew 11:28
                </div>
            </div>
            <div class='w-auto'>
                <div class='flex justify-around px-8'>
                    {#each [{text: 'Join Us', href: '/'}, {text: 'Learn More', href: ''}] as {text, href}}
                        <a {href} class='btn btn-outline btn-secondary btn-lg text-secondary-content'>{text}</a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    {#if children}
    {@render children()}
    {/if}
</div>