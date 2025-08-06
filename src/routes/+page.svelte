<script lang="ts">
    import { CHURCH_INFO } from "$lib";
    import Section from "$lib/section.svelte";
    import smoothscroll from '$lib/smoothscroll';

    interface EventInfo {
        name: string;
        details: string;
        info_href: string;
        href: string;
        src: string;
    }
    const events: EventInfo[] = [
        {
            name: 'Marriage Conference',
            details: 'Aug 8 - Aug 12 | Tuscarora, PA',
            info_href: '/',
            href: '/',
            src: '/marriage.jpg',
        },
        {
            name: 'Baptism',
            details: 'Sun Aug 10 | 6pm Mass',
            info_href: '/',
            href: '/',
            src: '/baby.jpg',
        },
        {
            name: 'Youth Service',
            details: 'Wed Nights, 7pm | Youth Center',
            info_href: '/',
            href: '/',
            src: '/youth.jpg',
        },
    ]
    const mass = [
        ['Saturday', '<b>6 PM</b> | <b>8 PM</b>'],
        ['Sunday', '<b>8 AM | 10:30 AM</b> | <b>12 PM</b>'],
        ['Wednesday', '<b>6 PM</b>, <b>8 PM</b> in the summer'],
        ['Thursday', '<b>4 PM</b>'],
        ['Friday', '<b>10 AM</b> during the school year']
    ]
</script>

<svelte:head>
    <title>{CHURCH_INFO.CHURCH_NAME} | Home</title>
</svelte:head>

{#snippet hero()}
<div class='w-full md:h-100 lg:h-128 overflow-hidden relative font-formal'>
    <img src='/bg1.jpg' alt='Church' class='object-cover object-center h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 brightness-40 contrast-125 -z-1 bg-black/80'/>
    <div class='flex w-full h-full text-base-100 text-shadow-sm text-shadow-black/40 text-center sm:max-w-13/16 xl:max-w-7/8 mx-auto'>
        <div class='flex flex-col m-auto gap-3 md:gap-6 bg-black/15 rounded-box p-16'>
            <div class='text-3xl/8 md:text-4xl/10 lg:text-5xl/20 uppercase tracking-wide font-formal'>
                Welcome to {CHURCH_INFO.CHURCH_NAME}
            </div>
            <div class='flex flex-col gap-2'>
                <div class='italic text-red-600 md:text-xl/8 lg:text-2xl/11 w-5/8 mx-auto max-h-24'>
                    "Come unto me, all ye that labour and are heavy laden, and I will give you rest."
                </div>
                <div class='text-sm md:text-lg'>
                    Matthew 11:28
                </div>
            </div>
            <div class='mx-auto'>
                <div class='grid grid-cols-2 gap-8 md:px-8 md:gap-24 not-md:mt-8 text-center'>
                    <a href='/' class='btn btn-sm md:btn-md lg:btn-lg btn-wide btn-secondary text-center text-secondary-content col-span-2'>Donate</a>
                </div>
            </div>
        </div>
    </div>
</div>
{/snippet}

{#snippet mass_and_service()}
<!--
    <section id='info' class='flex flex-col lg:flex-row w-full md:px-12 md:py-4 md:justify-around lg:gap-0'>
        <img src='/rosary.jpg' alt='Rosary' class='w-46'/>
        <div class='px-6 md:px-4 my-auto flex-1'>
            <div class='not-lg:text-center text-lg md:text-xl lg:text-2xl font-formal font-semibold'>
                Mass Times
            </div>
            <div class='grid grid-cols-2 py-4 lg:gap-4'>
                {#each mass as [day, service]}
                    <span class='w-sm'>{day}:</span>
                    <span class='max-w-md'>{@html service}</span>
                {/each}
            </div>
        </div>
    </section>
    -->
    <section id='info' class='grid grid-cols-2 place-items-center lg:w-3/4'>
        <img src='/rosary.jpg' alt='Rosary' class='w-120 mx-auto md:mx-0 col-span-2 md:col-span-1'/>
        <div class='col-span-2 md:col-span-1 p-2'>
            <div class='text-center text-lg font-semibold'>
                Mass Times
            </div>
            <div class='p-4 grid grid-cols-2 whitespace-nowrap text-sm lg:text-base place-items-center'>
                {#each mass as [day, service]}
                    <span class='p-1 place-self-start'>{day}:</span>
                    <span class='p-1 place-self-start'>{@html service}</span>
                {/each}
            </div>
        </div>
    </section>
{/snippet}

<!-- CONTENT HERE -->

{@render hero()}

<Section>
    {@render mass_and_service()}
</Section>
