export default function Steps() {
	return (
		<section class="text-gray-600 body-font">
			<div class="container px-5 py-24 mx-auto flex flex-wrap">
				<div class="flex flex-wrap w-full">
					<div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
						<div class="flex-grow p-4">
							<h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
								How does it work?
							</h2>
						</div>
						<div class="flex relative pb-12">
							<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>

							<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
							</div>

							<div class="flex-grow pl-4">
								<h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									Project kick-off
								</h2>
								<p class="leading-relaxed">Agreement on terms of engagement</p>
							</div>
						</div>
						<div class="flex relative pb-12">
							<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div class="flex-grow pl-4">
								<h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									Immersion
								</h2>
								<p class="leading-relaxed">
									Expectation setting and questionnaire discussion with the
									founder(s)
								</p>
							</div>
						</div>
						<div class="flex relative pb-12">
							<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<circle cx="12" cy="5" r="3"></circle>
									<path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
								</svg>
							</div>
							<div class="flex-grow pl-4">
								<h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									Pitch deck creation
								</h2>
								<p class="leading-relaxed">First cut of the pitch deck</p>
							</div>
						</div>
						<div class="flex relative pb-12">
							<div class="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div class="flex-grow pl-4">
								<h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									Revisions
								</h2>
								<p class="leading-relaxed">
									Feedback incorporation [content, flow, and design]
								</p>
							</div>
						</div>
						<div class="flex relative">
							<div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
									<path d="M22 4L12 14.01l-3-3"></path>
								</svg>
							</div>
							<div class="flex-grow pl-4">
								<h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									Closure
								</h2>
								<p class="leading-relaxed">
									Final deliverables, handover of editable files
								</p>
							</div>
						</div>
					</div>
					<img
						class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
						src="https://dummyimage.com/1200x500"
						alt="step"
					/>
				</div>
			</div>
		</section>
	);
}