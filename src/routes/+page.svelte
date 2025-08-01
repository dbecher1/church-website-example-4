<script lang="ts">
    import { CHURCH_INFO } from "$lib";
    import LandingWithBg from "$lib/landing_with_bg.svelte";
    import Section from "$lib/section.svelte";

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
        ['Friday', '<b>10 AM</b> during the school year only']
    ]
</script>

<svelte:head>
    <title>{CHURCH_INFO.CHURCH_NAME} | Home</title>
</svelte:head>

{#snippet mass_and_service()}
    <div class='flex flex-col lg:flex-row w-full md:px-12 md:py-4 md:justify-around lg:gap-0 gap-8'>
        <img src='/rosary.jpg' alt='Rosary' class='not-lg:h-md'/>
        <div class='px-6 md:px-4 min-w-sm max-w-lg md:w-xl my-auto flex-1'>
            <div class='text-2xl font-formal font-semibold'>
                Mass Times
            </div>
            <div class='grid grid-cols-2 py-4 gap-2 lg:gap-4'>
                {#each mass as [day, service]}
                    <span class='w-sm'>{day}:</span>
                    <span class='max-w-md'>{@html service}</span>
                {/each}
            </div>
        </div>
    </div>
{/snippet}

{#snippet banner(text: string, bg: string)}
    <div class='w-full bg-base-300/50 py-8 md:py-12 font-formal text-center text-3xl md:text-4xl lg:text-6xl text-shadow-sm text-shadow-black/30 border-[1px] border-secondary/10'>
        <div class={['text-secondary-content w-full flex', bg]}>
            <div class='mx-auto p-8 md:p-12 lg:p-20'>
                {text}
            </div>
        </div>
    </div>
{/snippet}

{#snippet event_card({name, details, info_href, href, src}: EventInfo)}
    <div class='card bg-neutral lg:w-96 not-lg:px-12 lg:h-128 p-4 shadow-sm transform hover:shadow-lg hover:scale-105 md:mx-auto'>
        <figure>
            <div class='max-w-96 max-h-72'>
                <img {src} alt={name} class='max-w-96'/>
            </div>
        </figure>
        <div class='card-body'>
            <div class='card-title'>
                {name}
            </div>
            <div class='text-sm/2 tracking-tighter'>
                {details}
            </div>
            <div>
                <a href={info_href} class='link link-hover'>More Info</a>
            </div>
        </div>
        <div class='card-actions flex justify-center'>
            <a {href} class='btn btn-info'>Register Now</a>
        </div>
    </div>
{/snippet}

<!-- CONTENT HERE -->

<LandingWithBg/>

<Section>
    {@render mass_and_service()}
</Section>
<!-- 
{@render banner('Upcoming Events', 'bg-secondary')}

<Section>
    {#each events as e}
        {@render event_card(e)}
    {/each}
</Section> -->

<!-- {@render banner('Watch our Mass Livestream', 'bg-primary')}

<Section>
    <span></span>
</Section> -->