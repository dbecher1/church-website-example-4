<script lang="ts">
	import '../app.css';
	import {Icon, Bars3, Envelope, Phone, Calendar} from 'svelte-hero-icons';
	import { CHURCH_INFO } from '$lib';

	let { children } = $props();

	interface Link {
		text: string;
		href: string;
		give?: boolean;
	}
	
	const headerLinks: Link[] = [
		/* {text: 'About Us', href: '/'},
		{text: 'Staff', href: '/'},
		{text: 'Mass Times', href: '/'},
		{text: 'Sermons', href: '/'},
		{text: 'Events', href: '/'},
		{text: 'Visit', href: '/'}, */
		{text: 'Donate', href: '/', give: true},
	]

	const footerLinks: Link[] = [
		{text: 'Terms & Conditions', href: '/'},
		{text: 'Private Policy', href: '/'},
		{text: 'Accessibility Statement', href: '/'},
	]
</script>

{#snippet header_top_bar()}
<div id='header-top-bar' class='not-md:hidden bg-primary w-full h-9 flex flex-1 text-primary-content font-semibold text-sm tracking-wide'>
	<div id='header-top-bar-content' class='flex justify-between w-full mx-12 my-auto'>
		<div id='header-top-bar-left' class='flex gap-4'>
			<span id='header-top-bar-phone' class=''>
				<Icon src={Phone} solid class='size-3.5 inline'/>
				{CHURCH_INFO.CHURCH_NUMBER}
			</span>
			<a id='header-top-bar-email' href={'/'} class='hover:text-primary-content/75 link link-hover'>
				<Icon src={Envelope} solid class='size-3.5 inline'/>
				{CHURCH_INFO.CHURCH_EMAIL}
			</a>
		</div>
		<div id='header-top-bar-right' class='flex gap-8'>
			<span id='header-top-bar-calendar' class='hover:text-primary-content/75 link link-hover'>
				<Icon src={Calendar} solid class='size-3.5 inline'/>
				Calendar
			</span>
			<span id='header-top-bar-bulletin' class='hover:text-primary-content/75 link link-hover'>
				Bulletin
			</span>
		</div>
	</div>
</div>
{/snippet}

{#snippet render_links()}
	{#each headerLinks as {text, href, give}}
		<li>					
			{#if give}
				<a {href} class='md:bg-secondary text-base-content md:text-secondary-content hover:shadow-lg hover:scale-105 md:ml-2'>
					{text}
				</a>
			{:else}
				<a {href} class='not-md:hover:shadow-lg not-md:hover:scale-105'>{text}</a>
			{/if}
		</li>
	{/each}
{/snippet}

{#snippet header()}
	<div class='flex flex-col'>
		{@render header_top_bar()}
		<div class='md:navbar shadow-sm bg-base-100 font-formal py-6 not-md:flex justify-between'>
			<div class='flex-1 p-2'>
				 <a href='/' class='btn btn-ghost md:tracking-normal tracking-tighter text-lg'>{CHURCH_INFO.CHURCH_NAME}</a>
			</div>
			<div class='flex-none not-md:hidden'>
				<ul class='menu menu-horizontal px-1'>
					{@render render_links()}
				</ul>
			</div>
			<label for='sidebar-drawer' class='md:hidden drawer-button btn btn-ghost not-md:mr-4 px-2 size-12'>
				<Icon src={Bars3} class='fill-base-content'/>
			</label>
		</div>
	</div>
{/snippet}

{#snippet sidebar()}
<div class='md:hidden fixed right-0 top-8'>
	<input id='sidebar-drawer' type='checkbox' class='drawer-toggle'/>
	<div class='drawer-side'>
		<label for='sidebar-drawer' aria-label='close sidebar' class='drawer-overlay'></label>
		<ul class='menu bg-base-200 text-base-content min-h-full w-80 p-4 z-55'>
			<li class='text-lg p-3'>{CHURCH_INFO.CHURCH_NAME}</li>
			<hr class='text-primary -mt-2 mb-2 w-[90%]'>
			{@render render_links()}
		</ul>
	</div>
</div>
{/snippet}

{#snippet footer()}
	<footer class='flex flex-col bg-base-300 text-base-content gap-6'>
		<div class='footer sm:footer-vertical pt-6 px-16'>
			<div class='flex md:flex-row flex-col gap-4 justify-between w-full'>
				<nav class='flex md:flex-row flex-col gap-4'>
				{#each footerLinks as {text, href}}
					<a {href} class='link link-hover hover:text-neutral-content/70'>{text}</a>
				{/each}
				</nav>
				<div>
					SOCIALS GO HERE
				</div>
			</div>
		</div>
		<div class='footer sm:footer-horizontal pb-6 px-16 text-[6pt]'>
			<aside>&copy; 2025 {CHURCH_INFO.CHURCH_NAME}, All Rights Reserved. <br class='sm:hidden'>Page by Daniel Becher.</aside>
		</div>
	</footer>
{/snippet}

<div class='w-full min-w-sm mx-auto flex flex-col flex-1 z-1 max-w-[112rem] drawer drawer-end'>
	<header>
		{@render header()}
	</header>
	<main class='flex-1 w-full drawer-content'>
		{@render children()}
		{@render sidebar()}
	</main>
	<footer>
		{@render footer()}
	</footer>
</div>

