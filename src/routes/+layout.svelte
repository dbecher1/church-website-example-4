<script lang="ts">
	import '../app.css';
	import {Icon, Bars3, Envelope, Phone, Calendar} from 'svelte-hero-icons';
	import { CHURCH_INFO } from '$lib';
	import Facebook from '$lib/facebook.svelte';
	import Instagram from '$lib/instagram.svelte';
	

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
<div id='header-top-bar' class='bg-primary w-full h-9 flex flex-1 text-primary-content font-semibold text-[8pt] sm:text-sm tracking-wide'>
	<div id='header-top-bar-content' class='flex justify-between w-full px-6 sm:px-12 my-auto'>
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
		<div id='header-top-bar-right' class=' gap-8 hidden'>
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
				<a {href} class='btn-secondary btn btn-sm md:btn-md md:ml-2'>
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
		<div class='navbar shadow-sm bg-base-100 font-formal py-6 px-4 md:px-8 lg:px-12'>
			<div class='flex-1'>
				 <span class='tracking-tighter text-sm sm:text-lg'>{CHURCH_INFO.CHURCH_NAME}</span>
			</div>
			<div class='flex-none'>
				<ul class=''>
					{@render render_links()}
				</ul>
			</div>
		</div>
	</div>
{/snippet}

{#snippet footer()}
<div class='bg-neutral text-neutral-content'>
	<div class="footer sm:footer-horizontal p-4 sm:p-6 md:p-10 not-sm:gap-6">
		<div>
			<h6 class='footer-title'>{CHURCH_INFO.CHURCH_NAME}</h6>
			<div class='link link-hover'>
				1234 Holly Grove Road
				<br>
				Smithtown, NY, 11787
			</div>
		</div>
		<nav>
			<h6 class='footer-title'>Contact Us</h6>
			<div>Phone: {CHURCH_INFO.CHURCH_NUMBER}</div>
			<div>
				Email: <a href='/' class='link link-hover'>
				{CHURCH_INFO.CHURCH_EMAIL}
			</a>
			</div>
		</nav>
		<nav>
			<h6 class='footer-title'>Socials</h6>
			<div class='flex gap-4'>
				<a href='/' class=''>
					<Facebook class='size-8 fill-neutral-content hover:fill-gray-200'/>
				</a>
				<a href='/' class=''>
					<Instagram class='size-8 fill-neutral-content hover:fill-gray-200'/>
				</a>
			</div>
		</nav>
	</div>
	<aside class="footer sm:footer-horizontal not-md:-mt-2 p-6 md:p-10 text-[8pt]">
		&copy; 2025 {CHURCH_INFO.CHURCH_NAME}. All Rights Reserved.<br>
		Website by Ministry Brands.
	</aside>
</div>
{/snippet}

<div class='w-full min-w-sm mx-auto flex flex-col flex-1 z-1 max-w-[112rem]'>
	<header>
		{@render header()}
	</header>
	<main class='flex-1 w-full'>
		{@render children()}
	</main>
	<footer>
		{@render footer()}
	</footer>
</div>

