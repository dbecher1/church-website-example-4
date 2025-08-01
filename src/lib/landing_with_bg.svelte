<script lang="ts">
    import { CHURCH_INFO } from "$lib";
    let {children = null, ...props} = $props();
</script>

<div class='w-full h-128 md:h-192 overflow-hidden relative font-formal'>
    <img src='/bg1.jpg' alt='Church' class='object-cover object-center h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 brightness-40 contrast-125 -z-1 bg-black/80'/>
    <div class='flex w-full h-full text-base-100 text-shadow-sm text-shadow-black/40 text-center'>
        <div class='flex flex-col m-auto lg:max-w-1/2 gap-3 md:gap-6 bg-black/15 rounded-box p-16'>
            <div class='text-3xl/8 md:text-5xl/10 lg:text-6xl/20 uppercase tracking-wide font-formal'>
                Welcome to {CHURCH_INFO.CHURCH_NAME}
            </div>
            <div class='flex flex-col gap-2'>
                <div class='italic text-red-600 md:text-xl/8 lg:text-3xl/11 w-5/8 mx-auto'>
                    "Come unto me, all ye that labour and are heavy laden, and I will give you rest."
                </div>
                <div class='text-sm md:text-lg'>
                    Matthew 11:28
                </div>
            </div>
            <div class=''>
                <div class='grid grid-cols-3 gap-4 md:px-8 md:gap-24 not-md:mt-8'>
                    {#each [{text: 'Join Us', href: '/'}, {text: 'Learn More', href: ''}, {text: 'Donate', href: ''}] as {text, href}}
                        <a {href} class='btn btn-outline btn-secondary btn-sm md:btn-lg px-4 text-secondary-content'>{text}</a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    {#if children}
    {@render children()}
    {/if}
</div>