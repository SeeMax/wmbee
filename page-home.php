<?php /* Template Name: Home */ get_header(); ?>
	<?php while (have_posts()) : the_post(); ?>
		<main class="home-page">
			<!-- Reversed Background Images -->
			<?php if( have_rows('social') ): ?><?php while( have_rows('social') ): the_row(); $image = get_sub_field('image');?>
				<div id="background8" class="section-back"></div>
				<!-- <div id="overlay8" class="section-overlay sectionOverlay"></div> -->
      <?php endwhile;endif;?>
			<?php if( have_rows('partner') ): ?><?php while( have_rows('partner') ): the_row(); $image = get_sub_field('image');?>
				<div id="background7" class="section-back background-image-section sectionBack" style="background-image:url(<?php echo $image['url'];?>)"></div>
				<div id="overlay7" class="section-overlay sectionOverlay"></div>
      <?php endwhile;endif;?>
			<?php if( have_rows('hope') ): ?><?php while( have_rows('hope') ): the_row(); $image = get_sub_field('image');?>
				<div id="background6" class="section-back background-image-section sectionBack" style="background-image:url(<?php echo $image['url'];?>)"></div>
				<div id="overlay6" class="section-overlay sectionOverlay"></div>
			<?php endwhile;endif;?>
			<?php if( have_rows('impact') ): ?><?php while( have_rows('impact') ): the_row(); $image = get_sub_field('image');?>
				<div id="background5" class="section-back background-image-section sectionBack" style="background-image:url(<?php echo $image['url'];?>)"></div>
				<div id="overlay5" class="section-overlay sectionOverlay"></div>
			<?php endwhile;endif;?>
			<?php if( have_rows('devastation') ): ?><?php while( have_rows('devastation') ): the_row(); $image = get_sub_field('image');?>
				<div id="background4" class="section-back background-image-section sectionBack" style="background-image:url(<?php echo $image['url'];?>)"></div> 
				<!-- <div id="overlay4" class="section-overlay sectionOverlay"></div> -->
			<?php endwhile;endif;?>
			<?php if( have_rows('video_content') ): ?><?php while( have_rows('video_content') ): the_row(); $image = get_sub_field('image');?>
				<div id="background3" class="section-back"></div>	
				<!-- <div id="overlay3" class="section-overlay sectionOverlay"></div> -->
			<?php endwhile;endif;?>
			<?php if( have_rows('hero') ): ?><?php while( have_rows('hero') ): the_row();  $image = get_sub_field('image');?>
				<div id="background1" class="section-back background-image-section sectionBack" style="background-image:url(<?php echo $image['url'];?>)"></div>
				<div id="overlay1" class="section-overlay sectionOverlay"></div>
			<?php endwhile;endif;?>

			<!-- <div id="overlay0" class="main-overlay"></div> -->
			<?php if( have_rows('hero') ): ?><?php while( have_rows('hero') ): the_row(); 
				$title = get_sub_field('title');
				$subtitle = get_sub_field('subtitle');
				$image = get_sub_field('image');
				$body = get_sub_field('body');
			?>
				<section id="section1" class="hero-section-one">
					<div class="section-lines sectionLines">
						<?php get_template_part( 'partials/_backlines' ); ?>
					</div>
					<div class="down-arrow-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<g id="down-arrow">
								<polyline id="down-arrow-point" points="713.04 794.9 721.85 801.65 730.65 794.9"/>
								<line id="down-arrow-line" x1="721.85" y1="801.65" x2="721.85" y2="781.67"/>
							</g>
						</svg>
					</div>
					<div class="content sectionContent">
						<h1><?php echo $title;?></h1>
						<h2><?php echo $title;?></h2>  
						<h3><?php echo $subtitle;?></h3>
					</div>
				</section>
				<section id="section2" class="hero-section-two">
					<div class="section-lines sectionLines">
						<?php get_template_part( 'partials/_backlines' ); ?>
					</div>
					<div class="down-arrow-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<g id="down-arrow">
								<polyline id="down-arrow-point" points="713.04 794.9 721.85 801.65 730.65 794.9"/>
								<line id="down-arrow-line" x1="721.85" y1="801.65" x2="721.85" y2="781.67"/>
							</g>
							<g class="down-arrow-text">
								<path d="M603.09,757.39h4a5,5,0,0,1,2.63.68A4.49,4.49,0,0,1,611.5,760a6.76,6.76,0,0,1,.61,3,6.69,6.69,0,0,1-.61,3,4.61,4.61,0,0,1-1.75,1.95,5,5,0,0,1-2.64.69h-4ZM607,767.56a4,4,0,0,0,2.09-.53,3.53,3.53,0,0,0,1.39-1.58,6.38,6.38,0,0,0,0-5,3.56,3.56,0,0,0-1.39-1.57,4.11,4.11,0,0,0-2.09-.53h-2.8v9.16Z" transform="translate(0.85 0.5)"/>
								<path d="M614.16,757.39h1.12v11.2h-1.12Z" transform="translate(0.85 0.5)"/>
								<path d="M619.59,768.17a3.62,3.62,0,0,1-1.36-1.39,3.73,3.73,0,0,1-.45-1.78v0H619V765a2.87,2.87,0,0,0,.29,1.22,2.55,2.55,0,0,0,.92,1,2.85,2.85,0,0,0,1.61.42,3,3,0,0,0,1.91-.6,1.94,1.94,0,0,0,.76-1.61,1.68,1.68,0,0,0-.54-1.33,2.93,2.93,0,0,0-1.4-.64l-1.71-.33a5,5,0,0,1-1.84-.79,2.31,2.31,0,0,1-.91-2.09,3,3,0,0,1,.45-1.65,3,3,0,0,1,1.27-1.1,4.36,4.36,0,0,1,1.88-.39,4.13,4.13,0,0,1,2.08.49,3.43,3.43,0,0,1,1.3,1.29,3.49,3.49,0,0,1,.43,1.64v0h-1.22v0a2.52,2.52,0,0,0-.25-1.06,2.2,2.2,0,0,0-.83-1,2.65,2.65,0,0,0-1.54-.4,2.53,2.53,0,0,0-1.79.6,2,2,0,0,0-.66,1.53,1.63,1.63,0,0,0,.49,1.23,2.52,2.52,0,0,0,1.35.65l1.52.29q3.09.63,3.09,3a3,3,0,0,1-.48,1.68,3.22,3.22,0,0,1-1.35,1.17,4.49,4.49,0,0,1-2,.43A4.15,4.15,0,0,1,619.59,768.17Z" transform="translate(0.85 0.5)"/>
								<path d="M630,768a4.68,4.68,0,0,1-1.73-2,7.78,7.78,0,0,1,0-6,4.6,4.6,0,0,1,4.41-2.77,4.69,4.69,0,0,1,3.11,1,5,5,0,0,1,1.65,2.83h-1.08a4,4,0,0,0-1.34-2.09,3.63,3.63,0,0,0-2.33-.77,3.38,3.38,0,0,0-2.85,1.28,6.5,6.5,0,0,0,0,6.93,3.39,3.39,0,0,0,2.85,1.29,3.6,3.6,0,0,0,2.2-.68,3.8,3.8,0,0,0,1.34-1.85h1.12a4.9,4.9,0,0,1-1.68,2.59,4.62,4.62,0,0,1-3,1A4.78,4.78,0,0,1,630,768Z" transform="translate(0.85 0.5)"/>
								<path d="M641.42,768a4.66,4.66,0,0,1-1.72-2,7,7,0,0,1-.6-3,7.19,7.19,0,0,1,.6-3,5,5,0,0,1,7.12-2,4.57,4.57,0,0,1,1.73,2,7.17,7.17,0,0,1,.6,3,7,7,0,0,1-.6,3,4.65,4.65,0,0,1-1.73,2,4.89,4.89,0,0,1-2.69.72A5,5,0,0,1,641.42,768Zm4.76-.91a3.78,3.78,0,0,0,1.35-1.66,6.2,6.2,0,0,0,.47-2.48,6.1,6.1,0,0,0-.47-2.46,3.84,3.84,0,0,0-1.35-1.68,3.82,3.82,0,0,0-4.11,0,3.82,3.82,0,0,0-1.34,1.68,6.73,6.73,0,0,0,0,4.94,3.76,3.76,0,0,0,1.34,1.66,3.87,3.87,0,0,0,4.11,0Z" transform="translate(0.85 0.5)"/>
								<path d="M650.16,757.39h1.12l3.58,10.13h.1l3.58-10.13h1.12l-3.95,11.2h-1.6Z" transform="translate(0.85 0.5)"/>
								<path d="M662.43,758.4v4h5v.93h-5v4.25h5.63v1h-6.73v-11.2h6.73v1Z" transform="translate(0.85 0.5)"/>
								<path d="M673.71,764h-2.17v4.61h-1.11v-11.2h3.7a4.51,4.51,0,0,1,2.24.49,3.07,3.07,0,0,1,1.23,1.25,3.48,3.48,0,0,1,.37,1.57,3.15,3.15,0,0,1-3.06,3.23l3.11,4.66h-1.24Zm-2.17-1H674a3.73,3.73,0,0,0,2-.53,2,2,0,0,0,.84-1.79,1.92,1.92,0,0,0-.84-1.78,3.73,3.73,0,0,0-2-.52h-2.48Z" transform="translate(0.85 0.5)"/>
								<path d="M691.15,758.4h-3.39v10.19h-1.1V758.4h-3.4v-1h7.89Z" transform="translate(0.85 0.5)"/>
								<path d="M701.34,757.39v11.2h-1.1v-5.18h-6.08v5.18h-1.1v-11.2h1.1v5.1h6.08v-5.1Z" transform="translate(0.85 0.5)"/>
								<path d="M705.12,758.4v4h5v.93h-5v4.25h5.63v1H704v-11.2h6.73v1Z" transform="translate(0.85 0.5)"/>
								<path d="M715.78,757.39h1.1l2.67,10h.1l3.29-10h1l3.28,10h.09l2.69-10h1.11l-3,11.2h-1.56l-3-9.31h-.09l-3,9.31h-1.55Z" transform="translate(0.85 0.5)"/>
								<path d="M734.45,768a4.62,4.62,0,0,1-1.73-2,7.84,7.84,0,0,1,0-6,4.76,4.76,0,0,1,1.73-2,5.34,5.34,0,0,1,5.39,0,4.63,4.63,0,0,1,1.73,2,7.17,7.17,0,0,1,.6,3,7,7,0,0,1-.6,3,4.72,4.72,0,0,1-1.73,2,5.42,5.42,0,0,1-5.4,0Zm4.76-.91a3.76,3.76,0,0,0,1.34-1.66,6,6,0,0,0,.47-2.48,5.93,5.93,0,0,0-.47-2.46,3.82,3.82,0,0,0-1.34-1.68,3.82,3.82,0,0,0-4.11,0,3.84,3.84,0,0,0-1.35,1.68,6.73,6.73,0,0,0,0,4.94,3.78,3.78,0,0,0,1.35,1.66,3.87,3.87,0,0,0,4.11,0Z" transform="translate(0.85 0.5)"/>
								<path d="M747.63,764h-2.17v4.61h-1.11v-11.2h3.7a4.51,4.51,0,0,1,2.24.49,3.07,3.07,0,0,1,1.23,1.25,3.62,3.62,0,0,1,.37,1.57,3.35,3.35,0,0,1-.73,2.1,3.29,3.29,0,0,1-2.33,1.13l3.11,4.66H750.7Zm-2.17-1h2.48a3.73,3.73,0,0,0,2-.53,2,2,0,0,0,.84-1.79,1.92,1.92,0,0,0-.84-1.78,3.73,3.73,0,0,0-2-.52h-2.48Z" transform="translate(0.85 0.5)"/>
								<path d="M760.8,767.58v1h-6.46l0-11.2h1.12l0,10.19Z" transform="translate(0.85 0.5)"/>
								<path d="M762.75,757.39h4a5.06,5.06,0,0,1,2.64.68,4.47,4.47,0,0,1,1.74,1.95,6.76,6.76,0,0,1,.62,3,6.69,6.69,0,0,1-.62,3,4.59,4.59,0,0,1-1.74,1.95,5,5,0,0,1-2.65.69h-4Zm3.89,10.17a4,4,0,0,0,2.09-.53,3.55,3.55,0,0,0,1.4-1.58,6.5,6.5,0,0,0,0-5,3.58,3.58,0,0,0-1.4-1.57,4.11,4.11,0,0,0-2.09-.53h-2.8v9.16Z" transform="translate(0.85 0.5)"/>
								<path d="M779.38,768a4.62,4.62,0,0,1-1.73-2,7.72,7.72,0,0,1,0-6,4.74,4.74,0,0,1,1.72-2,5.34,5.34,0,0,1,5.39,0,4.57,4.57,0,0,1,1.73,2,7.17,7.17,0,0,1,.6,3,7,7,0,0,1-.6,3,4.65,4.65,0,0,1-1.73,2,5.4,5.4,0,0,1-5.39,0Zm4.75-.91a3.78,3.78,0,0,0,1.35-1.66,6.2,6.2,0,0,0,.47-2.48,6.1,6.1,0,0,0-.47-2.46,3.84,3.84,0,0,0-1.35-1.68,3.82,3.82,0,0,0-4.11,0,3.82,3.82,0,0,0-1.34,1.68,6.73,6.73,0,0,0,0,4.94,3.76,3.76,0,0,0,1.34,1.66,3.87,3.87,0,0,0,4.11,0Z" transform="translate(0.85 0.5)"/>
								<path d="M790.4,758.4v4l4.8,0v.93h-4.8v5.26h-1.11v-11.2h6.53v1Z" transform="translate(0.85 0.5)"/>
								<path d="M801.23,757.39h4.42a3.54,3.54,0,0,1,1.85.44,2.48,2.48,0,0,1,1,1.09,3.1,3.1,0,0,1,.3,1.32,2.38,2.38,0,0,1-.33,1.27,2.69,2.69,0,0,1-.77.83,2.13,2.13,0,0,1-.84.36v.08a2.89,2.89,0,0,1,1,.29,2.6,2.6,0,0,1,1,.84,2.39,2.39,0,0,1,.44,1.5,3.39,3.39,0,0,1-.36,1.51,3,3,0,0,1-1.12,1.2,3.58,3.58,0,0,1-1.91.47h-4.64Zm4.1,5a2.75,2.75,0,0,0,1.67-.53,1.84,1.84,0,0,0,.71-1.57,1.69,1.69,0,0,0-.67-1.48,3,3,0,0,0-1.71-.47h-3v4Zm.24,5.23a3.21,3.21,0,0,0,1.88-.52,1.93,1.93,0,0,0,.74-1.69,1.83,1.83,0,0,0-.74-1.64,3.43,3.43,0,0,0-1.88-.49H802.3v4.34Z" transform="translate(0.85 0.5)"/>
								<path d="M812.33,758.4v4h5v.93h-5v4.25H818v1h-6.74v-11.2H818v1Z" transform="translate(0.85 0.5)"/>
								<path d="M821.46,758.4v4h5v.93h-5v4.25h5.63v1h-6.74v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
								<path d="M830.85,768.17a3.53,3.53,0,0,1-1.35-1.39A3.63,3.63,0,0,1,829,765v0h1.21V765a2.87,2.87,0,0,0,.29,1.22,2.55,2.55,0,0,0,.92,1,2.85,2.85,0,0,0,1.61.42,3,3,0,0,0,1.91-.6,1.94,1.94,0,0,0,.76-1.61,1.68,1.68,0,0,0-.54-1.33,2.89,2.89,0,0,0-1.39-.64l-1.72-.33a5.06,5.06,0,0,1-1.84-.79,2.33,2.33,0,0,1-.91-2.09,3,3,0,0,1,.45-1.65,3,3,0,0,1,1.27-1.1,4.36,4.36,0,0,1,1.88-.39,4.1,4.1,0,0,1,2.08.49,3.43,3.43,0,0,1,1.3,1.29,3.38,3.38,0,0,1,.43,1.64v0h-1.21v0a2.68,2.68,0,0,0-.25-1.06,2.34,2.34,0,0,0-.83-1,2.68,2.68,0,0,0-1.55-.4,2.55,2.55,0,0,0-1.79.6,2,2,0,0,0-.66,1.53,1.63,1.63,0,0,0,.49,1.23,2.6,2.6,0,0,0,1.35.65l1.52.29q3.09.63,3.09,3a3,3,0,0,1-.48,1.68,3.22,3.22,0,0,1-1.35,1.17,4.49,4.49,0,0,1-2,.43A4.15,4.15,0,0,1,830.85,768.17Z" transform="translate(0.85 0.5)"/>
							</g>
						</svg>
					</div>
					<div class="content sectionContent">
						<h2><?php echo $title;?></h2>  
						<div class="text-container">
							<?php echo $body;?>
						</div>
					</div>
				</section>
				
			<?php endwhile;endif;?>
			
			<?php if( have_rows('video_content') ): ?><?php while( have_rows('video_content') ): the_row(); 
				$mEmbed = get_sub_field('mobile_embed');
				$dEmbed = get_sub_field('embed');
			?>
				
				<!-- <section id="section3" class="video-section">
					<div class="section-lines sectionLines">
						<!-- ?php get_template_part( 'partials/_backlines' ); ?>
					</div>
					<div class="down-arrow-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<g id="down-arrow">
								<polyline id="down-arrow-point" points="713.04 794.9 721.85 801.65 730.65 794.9"/>
								<line id="down-arrow-line" x1="721.85" y1="801.65" x2="721.85" y2="781.67"/>
							</g>
							<g class="down-arrow-text">
								<path d="M653.87,758h4.42a3.52,3.52,0,0,1,1.85.44,2.53,2.53,0,0,1,1,1.09,3.1,3.1,0,0,1,.3,1.32,2.35,2.35,0,0,1-.33,1.27,2.62,2.62,0,0,1-.77.84,2.47,2.47,0,0,1-.84.36v.08a2.85,2.85,0,0,1,1,.28,2.6,2.6,0,0,1,1,.84,2.39,2.39,0,0,1,.44,1.5,3.35,3.35,0,0,1-.36,1.51,2.86,2.86,0,0,1-1.12,1.2,3.49,3.49,0,0,1-1.91.47h-4.64Zm4.1,5a2.67,2.67,0,0,0,1.67-.53,1.8,1.8,0,0,0,.71-1.56,1.66,1.66,0,0,0-.67-1.48A2.88,2.88,0,0,0,658,759h-3v4Zm.24,5.23a3.18,3.18,0,0,0,1.88-.52,1.91,1.91,0,0,0,.74-1.68,1.82,1.82,0,0,0-.74-1.64,3.33,3.33,0,0,0-1.88-.49h-3.27v4.33Z" transform="translate(0.5 0.5)"/>
								<path d="M665,759.05v4h5V764h-5v4.26h5.63v1h-6.74V758h6.74v1Z" transform="translate(0.5 0.5)"/>
								<path d="M674.1,759.05v4h5V764h-5v4.26h5.63v1H673V758h6.74v1Z" transform="translate(0.5 0.5)"/>
								<path d="M685.78,758h4a5,5,0,0,1,2.63.68,4.56,4.56,0,0,1,1.74,2,7.38,7.38,0,0,1,0,5.92,4.56,4.56,0,0,1-1.74,2,5,5,0,0,1-2.65.68h-4Zm3.88,10.18a4,4,0,0,0,2.09-.54,3.53,3.53,0,0,0,1.4-1.57,5.71,5.71,0,0,0,.5-2.48,5.64,5.64,0,0,0-.5-2.47,3.58,3.58,0,0,0-1.4-1.57,4,4,0,0,0-2.09-.54h-2.8v9.17Z" transform="translate(0.5 0.5)"/>
								<path d="M697.92,759.05v4h5V764h-5v4.26h5.63v1h-6.73V758h6.73v1Z" transform="translate(0.5 0.5)"/>
								<path d="M704.9,758H706l3.58,10.13h.1L713.28,758h1.12l-3.95,11.2h-1.6Z" transform="translate(0.5 0.5)"/>
								<path d="M721.41,765.82h-4.82l-1.28,3.42h-1.12l4.26-11.2h1.07l4.3,11.2H722.7Zm-.34-.91L719,759.47h-.07l-2,5.44Z" transform="translate(0.5 0.5)"/>
								<path d="M726.79,768.83a3.69,3.69,0,0,1-1.36-1.39,3.76,3.76,0,0,1-.45-1.78v0h1.21v.07a2.83,2.83,0,0,0,.29,1.21,2.51,2.51,0,0,0,.92,1,2.94,2.94,0,0,0,1.61.41,3,3,0,0,0,1.91-.6,1.93,1.93,0,0,0,.76-1.61,1.68,1.68,0,0,0-.54-1.32,2.84,2.84,0,0,0-1.4-.64l-1.71-.34a5.13,5.13,0,0,1-1.84-.78,2.34,2.34,0,0,1-.91-2.1A2.91,2.91,0,0,1,727,758.2a4.22,4.22,0,0,1,1.88-.4,4.13,4.13,0,0,1,2.08.5,3.29,3.29,0,0,1,1.3,1.29,3.46,3.46,0,0,1,.43,1.64v0h-1.22v0a2.56,2.56,0,0,0-.25-1.07,2.32,2.32,0,0,0-.83-.95,2.72,2.72,0,0,0-1.54-.4,2.49,2.49,0,0,0-1.79.61,2,2,0,0,0-.66,1.52,1.63,1.63,0,0,0,.49,1.23,2.6,2.6,0,0,0,1.35.66l1.52.29q3.09.61,3.09,3a3.06,3.06,0,0,1-.48,1.69A3.22,3.22,0,0,1,731,769a4.66,4.66,0,0,1-2,.42A4.25,4.25,0,0,1,726.79,768.83Z" transform="translate(0.5 0.5)"/>
								<path d="M742.06,759.05h-3.39v10.19h-1.1V759.05h-3.39v-1h7.88Z" transform="translate(0.5 0.5)"/>
								<path d="M749.47,765.82h-4.81l-1.28,3.42h-1.12l4.25-11.2h1.07l4.31,11.2h-1.12Zm-.33-.91-2.07-5.44H747l-2,5.44Z" transform="translate(0.5 0.5)"/>
								<path d="M759.78,759.05h-3.4v10.19h-1.1V759.05h-3.39v-1h7.89Z" transform="translate(0.5 0.5)"/>
								<path d="M761.73,758h1.12v11.2h-1.12Z" transform="translate(0.5 0.5)"/>
								<path d="M767.36,768.61a4.6,4.6,0,0,1-1.73-2,7.84,7.84,0,0,1,0-6,4.72,4.72,0,0,1,1.73-2.05,4.82,4.82,0,0,1,2.69-.74,4.91,4.91,0,0,1,2.7.73,4.75,4.75,0,0,1,1.73,2,7.25,7.25,0,0,1,.6,3,7.06,7.06,0,0,1-.6,3,4.69,4.69,0,0,1-1.73,2,5.36,5.36,0,0,1-5.4,0Zm4.76-.9a3.79,3.79,0,0,0,1.34-1.67,6.6,6.6,0,0,0,0-4.94,3.85,3.85,0,0,0-1.34-1.67,3.82,3.82,0,0,0-4.11,0,3.91,3.91,0,0,0-1.35,1.68,6.18,6.18,0,0,0-.47,2.47,6.1,6.1,0,0,0,.47,2.46,3.88,3.88,0,0,0,1.35,1.67,3.87,3.87,0,0,0,4.11,0Z" transform="translate(0.5 0.5)"/>
								<path d="M777.26,758h1.24l6.48,9.4h0V758h1.11v11.2H784.9l-6.47-9.31h-.06v9.31h-1.11Z" transform="translate(0.5 0.5)"/>
							</g>
						</svg>
					</div>
					<div class="content sectionContent">  
						<div class="video-area videoArea">
							<div class="iframe-holder iframeHolder" data-mobile-vid ="<!-- ?php echo $mEmbed;?>" data-desktop-vid="<!--?php echo $dEmbed;?>">  
								<iframe class="iframeEmpty" src="" width="640" height="1138" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>  		
							</div>
						</div>
					</div>
				</section> -->
			<?php endwhile;endif;?>

			<?php if( have_rows('devastation') ): ?><?php while( have_rows('devastation') ): the_row(); 
				$title = get_sub_field('title');
				$image = get_sub_field('image');
				$body = get_sub_field('body');
				$buzz = get_sub_field('buzz_on_bees');
			?>
				
				<section id="section4" class="devastation-section">
					<div class="buzz-on-bees-container c-block-fill">
						<div class="buzz-on-bees-block buzzOnBeesBlock background-image-section" style="background-image:url(<?php echo get_template_directory_uri(); ?>/dist/images/buzz-on-bees-paper.png">	
							<div class="buzz-on-bees-overlay c-block-fill"></div>
							<div class="buzz-on-bees-content">
								<img src="<?php echo get_template_directory_uri(); ?>/dist/images/karma-logo-bee.png" alt="Logo">
								<h4>The Buzz On Bees</h4>
								<p><?php echo $buzz;?></p>
							</div>
						</div>
					</div>
					<div class="section-lines sectionLines">
						<?php get_template_part( 'partials/_backlines' ); ?>
					</div>
					<div class="down-arrow-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<g id="down-arrow">
								<polyline id="down-arrow-point" points="713.04 794.9 721.85 801.65 730.65 794.9"/>
								<line id="down-arrow-line" x1="721.85" y1="801.65" x2="721.85" y2="781.67"/>
							</g>
							<g class="down-arrow-text">
								<path d="M693.77,762.19l-.67,3.07h2.8l-.19.88h-2.8l-.67,3.15h-1v-.19l.64-3h-3.16l-.67,3.15h-1v-.19l.64-3h-2.6l.19-.88H688l.65-3.07h-2.9l.2-.88h2.89l.69-3.22h1v.19l-.66,3H693l.7-3.22h.94v.19l-.65,3h2.51l-.19.88Zm-1,0h-3.15l-.67,3.07h3.15Z" transform="translate(0.85 0.5)"/>
								<path d="M698.11,758.09h1.1l2.68,9.95H702l3.3-9.95h1l3.28,9.95h.1l2.68-9.95h1.11l-3,11.2h-1.55l-3-9.31h-.1l-3,9.31h-1.55Z" transform="translate(0.85 0.5)"/>
								<path d="M715.12,758.09h1.61l3.62,9.12h0l3.61-9.12h1.62v11.2h-1.09v-9.42h-.08l-3.66,9.42H720l-3.67-9.42h-.08v9.42h-1.08Z" transform="translate(0.85 0.5)"/>
								<path d="M728.28,758.09h4.42a3.52,3.52,0,0,1,1.85.44,2.62,2.62,0,0,1,1,1.09,3.24,3.24,0,0,1,.29,1.32,2.38,2.38,0,0,1-.33,1.27,2.48,2.48,0,0,1-.77.83,2.16,2.16,0,0,1-.83.36v.08a3.1,3.1,0,0,1,1,.29,2.7,2.7,0,0,1,1,.84,2.45,2.45,0,0,1,.44,1.5,3.39,3.39,0,0,1-.36,1.51,2.93,2.93,0,0,1-1.12,1.2,3.64,3.64,0,0,1-1.92.47h-4.64Zm4.1,5a2.73,2.73,0,0,0,1.67-.53,1.81,1.81,0,0,0,.71-1.57,1.69,1.69,0,0,0-.67-1.48,3,3,0,0,0-1.71-.47h-3v4.05Zm.24,5.23a3.18,3.18,0,0,0,1.88-.52,1.9,1.9,0,0,0,.74-1.69,1.82,1.82,0,0,0-.74-1.64,3.41,3.41,0,0,0-1.88-.48h-3.26v4.33Z" transform="translate(0.85 0.5)"/>
								<path d="M739.39,759.1v4h5V764h-5v4.25H745v1h-6.74v-11.2H745v1Z" transform="translate(0.85 0.5)"/>
								<path d="M748.51,759.1v4h5V764h-5v4.25h5.63v1H747.4v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
							</g>
						</svg>
					</div>
					<div class="content sectionContent">   
						<h2><?php echo $title;?></h2>  
						<div class="text-container">
							<?php echo $body;?>
						</div>
					</div>
				</section>
			<?php endwhile;endif;?>

			<?php if( have_rows('impact') ): ?><?php while( have_rows('impact') ): the_row(); 
				$title = get_sub_field('title');
				$image = get_sub_field('image');
				$insetImage = get_sub_field('inset_image');
				$body = get_sub_field('body');
				$buzz = get_sub_field('buzz_on_bees');
			?>
				<section id="section5" class="impact-section">					
					<div class="buzz-on-bees-container c-block-fill">
						<div class="buzz-on-bees-block buzzOnBeesBlock background-image-section" style="background-image:url(<?php echo get_template_directory_uri(); ?>/dist/images/buzz-on-bees-paper.png">	
							<div class="buzz-on-bees-overlay c-block-fill"></div>
							<div class="buzz-on-bees-content">
								<img src="<?php echo get_template_directory_uri(); ?>/dist/images/karma-logo-bee.png" alt="Logo">
								<h4>The Buzz On Bees</h4>
								<p><?php echo $buzz;?></p>
							</div>
						</div>
					</div>
					<div class="section-lines sectionLines">
						<?php get_template_part( 'partials/_backlines' ); ?>
					</div>
					<div class="section-5-image-clip-container section5ImageClip">
						<svg id="clipped-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<defs>
							<clipPath id="honeyClip">
								<polyline id="honeyClipStart" class="cls-2" points="721 479 721 479 721 479 721 479 721 479 721 479 721 479"/>
								<path id="honeyClipEnd" d="M720,242.31,926.2,360.76v237.5L720.5,717,514.8,598.16V360.76L720,242.31" transform="translate(0.5 0.43)"/>
							</clipPath>
							</defs>
							<image 
								width="100%" 
								height="100%" 
								xlink:href="<?php echo $insetImage['url'];?>" 
								clip-path="url(#honeyClip)"
							/>
							<polyline id="bottom-small-2" points="721.5 742.5 699.8 730 699.8 705 721.5 692.5 743.2 705 743.2 730 721.5 742.5"/>
						</svg>
					</div>
					<div class="down-arrow-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<g id="down-arrow">
								<polyline id="down-arrow-point" points="713.04 794.9 721.85 801.65 730.65 794.9"/>
								<line id="down-arrow-line" x1="721.85" y1="801.65" x2="721.85" y2="781.67"/>
							</g>
							<g class="down-arrow-text">
								<path d="M647.08,758v11.2H646V764H639.9v5.19h-1.1V758h1.1v5.1H646V758Z" transform="translate(0.85 0.5)"/>
								<path d="M651.56,768.52a4.66,4.66,0,0,1-1.72-2,7,7,0,0,1-.6-3,7.19,7.19,0,0,1,.6-3,5,5,0,0,1,7.12-2,4.57,4.57,0,0,1,1.73,2,7.17,7.17,0,0,1,.6,3,7,7,0,0,1-.6,3,4.65,4.65,0,0,1-1.73,2,4.89,4.89,0,0,1-2.69.72A5,5,0,0,1,651.56,768.52Zm4.76-.91a3.85,3.85,0,0,0,1.35-1.66,6.75,6.75,0,0,0,0-5,3.94,3.94,0,0,0-1.35-1.67,3.82,3.82,0,0,0-4.11,0,3.82,3.82,0,0,0-1.34,1.68,6.73,6.73,0,0,0,0,4.94,3.76,3.76,0,0,0,1.34,1.66,3.87,3.87,0,0,0,4.11,0Z" transform="translate(0.85 0.5)"/>
								<path d="M667.4,758.49a3.21,3.21,0,0,1,1.24,1.36,4.27,4.27,0,0,1,0,3.43,3.17,3.17,0,0,1-1.23,1.35,4.17,4.17,0,0,1-2.25.53h-2.62v4h-1.07V758h3.69A4.15,4.15,0,0,1,667.4,758.49Zm-.3,5.11a2.36,2.36,0,0,0,.83-2,2.31,2.31,0,0,0-.83-2,3.4,3.4,0,0,0-2.05-.59h-2.51v5.23h2.51A3.47,3.47,0,0,0,667.1,763.6Z" transform="translate(0.85 0.5)"/>
								<path d="M672.22,759v4h5v.92h-5v4.26h5.63v1h-6.73V758h6.73v1Z" transform="translate(0.85 0.5)"/>
								<path d="M684,758h1.12v11.2H684Z" transform="translate(0.85 0.5)"/>
								<path d="M687.75,758H689l6.48,9.39h0V758h1.11v11.2h-1.23l-6.47-9.31h-.06v9.31h-1.11Z" transform="translate(0.85 0.5)"/>
								<path d="M708.79,758.49a3.21,3.21,0,0,1,1.24,1.36,4.27,4.27,0,0,1,0,3.43,3.17,3.17,0,0,1-1.23,1.35,4.17,4.17,0,0,1-2.25.53h-2.62v4h-1.07V758h3.69A4.15,4.15,0,0,1,708.79,758.49Zm-.3,5.11a2.33,2.33,0,0,0,.83-2,2.28,2.28,0,0,0-.83-2,3.4,3.4,0,0,0-2-.59h-2.51v5.23h2.51A3.47,3.47,0,0,0,708.49,763.6Z" transform="translate(0.85 0.5)"/>
								<path d="M713.11,767.94a5.79,5.79,0,0,1-1.1-3.74V758h1.09v6.25a6.06,6.06,0,0,0,.64,2.74,2.69,2.69,0,0,0,2.67,1.3A2.63,2.63,0,0,0,719,767a6.08,6.08,0,0,0,.65-2.75V758h1.07v6.25a5.8,5.8,0,0,1-1.1,3.75,4,4,0,0,1-3.24,1.34A4,4,0,0,1,713.11,767.94Z" transform="translate(0.85 0.5)"/>
								<path d="M724.28,759v4h5v.92h-5v4.26h5.64v1h-6.74V758h6.74v1Z" transform="translate(0.85 0.5)"/>
								<path d="M735.56,764.54h-2.17v4.61h-1.11V758H736a4.48,4.48,0,0,1,2.24.49,3.07,3.07,0,0,1,1.23,1.25,3.48,3.48,0,0,1,.37,1.57,3.15,3.15,0,0,1-3.06,3.23l3.11,4.66h-1.24Zm-2.17-1h2.48a3.79,3.79,0,0,0,2-.53,2,2,0,0,0,.83-1.79,1.93,1.93,0,0,0-.83-1.78,3.78,3.78,0,0,0-2-.52h-2.48Z" transform="translate(0.85 0.5)"/>
								<path d="M749.32,759h-3.39v10.19h-1.1V759h-3.4v-1h7.89Z" transform="translate(0.85 0.5)"/>
								<path d="M752.83,768.52a4.62,4.62,0,0,1-1.73-2,7,7,0,0,1-.59-3,7.19,7.19,0,0,1,.6-3,5,5,0,0,1,7.12-2,4.61,4.61,0,0,1,1.72,2,7.17,7.17,0,0,1,.6,3,7,7,0,0,1-.6,3,4.7,4.7,0,0,1-1.72,2,5.42,5.42,0,0,1-5.4,0Zm4.76-.91a3.76,3.76,0,0,0,1.34-1.66,6.75,6.75,0,0,0,0-5,3.85,3.85,0,0,0-1.34-1.67,3.84,3.84,0,0,0-4.12,0,3.82,3.82,0,0,0-1.34,1.68,6.73,6.73,0,0,0,0,4.94,3.76,3.76,0,0,0,1.34,1.66,3.89,3.89,0,0,0,4.12,0Z" transform="translate(0.85 0.5)"/>
								<path d="M769.69,764.54h-2.18v4.61h-1.1V758h3.7a4.51,4.51,0,0,1,2.24.49,3.07,3.07,0,0,1,1.23,1.25,3.62,3.62,0,0,1,.37,1.57,3.35,3.35,0,0,1-.73,2.1,3.29,3.29,0,0,1-2.33,1.13l3.1,4.66h-1.23Zm-2.18-1H770a3.76,3.76,0,0,0,2-.53,1.94,1.94,0,0,0,.83-1.79,1.91,1.91,0,0,0-.83-1.78,3.76,3.76,0,0,0-2-.52h-2.48Z" transform="translate(0.85 0.5)"/>
								<path d="M776.43,758h1.12v11.2h-1.12Z" transform="translate(0.85 0.5)"/>
								<path d="M782.13,768.51a4.75,4.75,0,0,1-1.73-2,7.78,7.78,0,0,1,0-6,4.86,4.86,0,0,1,1.73-2,4.78,4.78,0,0,1,2.68-.73,4.69,4.69,0,0,1,3.11,1,5.06,5.06,0,0,1,1.66,2.83h-1.09a4,4,0,0,0-1.34-2.09,3.62,3.62,0,0,0-2.32-.77A3.4,3.4,0,0,0,782,760a6.5,6.5,0,0,0,0,6.93,3.41,3.41,0,0,0,2.86,1.29,3.64,3.64,0,0,0,2.2-.68,3.84,3.84,0,0,0,1.33-1.85h1.12a4.9,4.9,0,0,1-1.68,2.59,4.68,4.68,0,0,1-3,1A4.78,4.78,0,0,1,782.13,768.51Z" transform="translate(0.85 0.5)"/>
								<path d="M793.58,768.52a4.62,4.62,0,0,1-1.73-2,7.84,7.84,0,0,1,0-6,4.76,4.76,0,0,1,1.73-2,5.34,5.34,0,0,1,5.39,0,4.63,4.63,0,0,1,1.73,2,7.17,7.17,0,0,1,.6,3,7,7,0,0,1-.6,3,4.72,4.72,0,0,1-1.73,2,5.42,5.42,0,0,1-5.4,0Zm4.76-.91a3.76,3.76,0,0,0,1.34-1.66,6.75,6.75,0,0,0,0-5,3.85,3.85,0,0,0-1.34-1.67,3.82,3.82,0,0,0-4.11,0,3.84,3.84,0,0,0-1.35,1.68,6.73,6.73,0,0,0,0,4.94,3.78,3.78,0,0,0,1.35,1.66,3.87,3.87,0,0,0,4.11,0Z" transform="translate(0.85 0.5)"/>
							</g>
						</svg>
					</div>
					<div class="content sectionContent">   
						<h2><?php echo $title;?></h2>  
						<div class="text-container">
							<?php echo $body;?>
						</div>
					</div>
				</section>
			<?php endwhile;endif;?>

			<?php if( have_rows('hope') ): ?><?php while( have_rows('hope') ): the_row(); 
				$title = get_sub_field('title');
				$image = get_sub_field('image');
				$body = get_sub_field('body');
				$buzz = get_sub_field('buzz_on_bees');
			?>
				
				<section id="section6" class="hope-section">
					<div class="buzz-on-bees-container c-block-fill">
						<div class="buzz-on-bees-block buzzOnBeesBlock background-image-section" style="background-image:url(<?php echo get_template_directory_uri(); ?>/dist/images/buzz-on-bees-paper.png">	
							<div class="buzz-on-bees-overlay c-block-fill"></div>
							<div class="buzz-on-bees-content">
								<img src="<?php echo get_template_directory_uri(); ?>/dist/images/karma-logo-bee.png" alt="Logo">
								<h4>The Buzz On Bees</h4>
								<p><?php echo $buzz;?></p>
							</div>
						</div>
					</div>
					<div class="section-lines sectionLines">
						<?php get_template_part( 'partials/_backlines' ); ?>
					</div>
					<div class="down-arrow-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<g id="down-arrow">
								<polyline id="down-arrow-point" points="713.04 794.9 721.85 801.65 730.65 794.9"/>
								<line id="down-arrow-line" x1="721.85" y1="801.65" x2="721.85" y2="781.67"/>
							</g>
							<g class="down-arrow-text">
							<path d="M614,768.17a3.62,3.62,0,0,1-1.36-1.39,3.73,3.73,0,0,1-.45-1.78v0h1.21V765a2.87,2.87,0,0,0,.29,1.22,2.55,2.55,0,0,0,.92,1,2.85,2.85,0,0,0,1.61.42,3,3,0,0,0,1.91-.6,1.94,1.94,0,0,0,.76-1.61,1.68,1.68,0,0,0-.54-1.33,2.93,2.93,0,0,0-1.4-.64l-1.71-.33a5,5,0,0,1-1.84-.79,2.31,2.31,0,0,1-.91-2.09,3,3,0,0,1,.45-1.65,3,3,0,0,1,1.27-1.1,4.36,4.36,0,0,1,1.88-.39,4.13,4.13,0,0,1,2.08.49,3.43,3.43,0,0,1,1.3,1.29,3.49,3.49,0,0,1,.43,1.64v0h-1.22v0a2.52,2.52,0,0,0-.25-1.06,2.2,2.2,0,0,0-.83-1,2.65,2.65,0,0,0-1.54-.4,2.53,2.53,0,0,0-1.79.6,2,2,0,0,0-.66,1.53,1.63,1.63,0,0,0,.49,1.23,2.52,2.52,0,0,0,1.35.65l1.52.29q3.09.63,3.09,3a3,3,0,0,1-.48,1.68,3.22,3.22,0,0,1-1.35,1.17,4.52,4.52,0,0,1-2,.43A4.13,4.13,0,0,1,614,768.17Z" transform="translate(0.85 0.5)"/>
								<path d="M628.5,765.17h-4.82l-1.28,3.42h-1.12l4.26-11.2h1.07l4.3,11.2h-1.12Zm-.34-.92-2.06-5.44H626l-2,5.44Z" transform="translate(0.85 0.5)"/>
								<path d="M630.67,757.39h1.12l3.59,10.13h.09l3.59-10.13h1.12l-3.95,11.2h-1.6Z" transform="translate(0.85 0.5)"/>
								<path d="M642.94,758.4v4h5v.93h-5v4.25h5.64v1h-6.74v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
								<path d="M661.22,765.17H656.4l-1.28,3.42H654l4.26-11.2h1.07l4.3,11.2h-1.12Zm-.34-.92-2.06-5.44h-.07l-2,5.44Z" transform="translate(0.85 0.5)"/>
								<path d="M669.22,757.39h4.41a3.49,3.49,0,0,1,1.85.44,2.5,2.5,0,0,1,1,1.09,3.09,3.09,0,0,1,.29,1.32,2.37,2.37,0,0,1-.32,1.27,2.6,2.6,0,0,1-.78.83,2.16,2.16,0,0,1-.83.36v.08a2.89,2.89,0,0,1,1,.29,2.6,2.6,0,0,1,1,.84,2.45,2.45,0,0,1,.44,1.5,3.39,3.39,0,0,1-.36,1.51,3.06,3.06,0,0,1-1.12,1.2,3.63,3.63,0,0,1-1.91.47h-4.64Zm4.09,5a2.73,2.73,0,0,0,1.67-.53,1.83,1.83,0,0,0,.72-1.57,1.69,1.69,0,0,0-.68-1.48,2.91,2.91,0,0,0-1.71-.47h-3v4Zm.24,5.23a3.16,3.16,0,0,0,1.88-.52,1.91,1.91,0,0,0,.75-1.69,1.81,1.81,0,0,0-.75-1.64,3.39,3.39,0,0,0-1.88-.49h-3.26v4.34Z" transform="translate(0.85 0.5)"/>
								<path d="M680.32,758.4v4h5v.93h-5v4.25H686v1h-6.73v-11.2H686v1Z" transform="translate(0.85 0.5)"/>
								<path d="M689.44,758.4v4h5v.93h-5v4.25h5.63v1h-6.73v-11.2h6.73v1Z" transform="translate(0.85 0.5)"/>
								<path d="M697.68,770.49a1.51,1.51,0,0,0,.71-.54,1.25,1.25,0,0,0,.22-.7.71.71,0,0,0-.12-.49.52.52,0,0,0-.35-.11.74.74,0,0,1-.57-.19.7.7,0,0,1-.18-.5.81.81,0,0,1,.23-.6.9.9,0,0,1,.65-.23.92.92,0,0,1,.84.32,1.38,1.38,0,0,1,.2.77v.56a2.23,2.23,0,0,1-.45,1.47,2.55,2.55,0,0,1-1.18.79Z" transform="translate(0.85 0.5)"/>
								<path d="M706.92,768.17a3.55,3.55,0,0,1-1.36-1.39,3.75,3.75,0,0,1-.46-1.78v0h1.22V765a2.87,2.87,0,0,0,.29,1.22,2.55,2.55,0,0,0,.92,1,2.85,2.85,0,0,0,1.61.42,3,3,0,0,0,1.91-.6,1.94,1.94,0,0,0,.76-1.61,1.66,1.66,0,0,0-.55-1.33,2.85,2.85,0,0,0-1.39-.64l-1.71-.33a5,5,0,0,1-1.84-.79,2.31,2.31,0,0,1-.91-2.09,3,3,0,0,1,.45-1.65,2.92,2.92,0,0,1,1.27-1.1,4.33,4.33,0,0,1,1.88-.39,4.13,4.13,0,0,1,2.08.49,3.4,3.4,0,0,1,1.73,2.93v0H711.6v0a2.52,2.52,0,0,0-.25-1.06,2.2,2.2,0,0,0-.83-1,2.65,2.65,0,0,0-1.54-.4,2.58,2.58,0,0,0-1.8.6,2,2,0,0,0-.65,1.53,1.63,1.63,0,0,0,.49,1.23,2.52,2.52,0,0,0,1.35.65l1.52.29q3.09.63,3.09,3a3,3,0,0,1-.48,1.68,3.19,3.19,0,0,1-1.36,1.17,4.45,4.45,0,0,1-2,.43A4.13,4.13,0,0,1,706.92,768.17Z" transform="translate(0.85 0.5)"/>
								<path d="M721.38,765.17h-4.82l-1.28,3.42h-1.12l4.26-11.2h1.07l4.3,11.2h-1.12Zm-.34-.92L719,758.81h-.07l-2,5.44Z" transform="translate(0.85 0.5)"/>
								<path d="M723.55,757.39h1.12l3.59,10.13h.09l3.59-10.13h1.12l-4,11.2h-1.6Z" transform="translate(0.85 0.5)"/>
								<path d="M735.82,758.4v4h5v.93h-5v4.25h5.64v1h-6.74v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
								<path d="M754.86,758.4h-3.39v10.19h-1.1V758.4H747v-1h7.88Z" transform="translate(0.85 0.5)"/>
								<path d="M765.06,757.39v11.2H764v-5.18h-6.08v5.18h-1.1v-11.2h1.1v5.1H764v-5.1Z" transform="translate(0.85 0.5)"/>
								<path d="M768.83,758.4v4h5v.93h-5v4.25h5.63v1h-6.73v-11.2h6.73v1Z" transform="translate(0.85 0.5)"/>
								<path d="M781.63,758.4v4h5v.93h-5v4.25h5.63v1h-6.73v-11.2h6.73v1Z" transform="translate(0.85 0.5)"/>
								<path d="M796.22,765.17h-4.81l-1.28,3.42H789l4.25-11.2h1.08l4.3,11.2h-1.12Zm-.33-.92-2.07-5.44h-.06l-2,5.44Z" transform="translate(0.85 0.5)"/>
								<path d="M803.82,764h-2.17v4.61h-1.11v-11.2h3.7a4.48,4.48,0,0,1,2.24.49,3,3,0,0,1,1.23,1.25,3.48,3.48,0,0,1,.37,1.57,3.15,3.15,0,0,1-3.06,3.23l3.11,4.66H806.9Zm-2.17-1h2.48a3.79,3.79,0,0,0,2-.53,2,2,0,0,0,.83-1.79,1.93,1.93,0,0,0-.83-1.78,3.78,3.78,0,0,0-2-.52h-2.48Z" transform="translate(0.85 0.5)"/>
								<path d="M817.58,758.4h-3.39v10.19h-1.1V758.4h-3.4v-1h7.89Z" transform="translate(0.85 0.5)"/>
								<path d="M827.77,757.39v11.2h-1.1v-5.18h-6.08v5.18h-1.1v-11.2h1.1v5.1h6.08v-5.1Z" transform="translate(0.85 0.5)"/>
							</g>
						</svg>
					</div>
					<div class="content sectionContent">   
						<h2><?php echo $title;?></h2>  
						<div class="text-container">
							<?php echo $body;?>
						</div>	
					</div>
				</section>
			<?php endwhile;endif;?>

			<!-- ?php if( have_rows('partner') ): ?>
			<!-- ?php while( have_rows('partner') ): the_row();  
				$title = get_sub_field('title');
				$image = get_sub_field('image');
				$insetImage = get_sub_field('inset_image');
				$body = get_sub_field('body');
			?>
				<section id="section7" class="partner-section">
					<div class="section-lines sectionLines">
						<!-- ?php get_template_part( 'partials/_backlines' ); ?>
					</div>
					<div class="down-arrow-svg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 790.43">
							<g id="down-arrow">
								<polyline id="down-arrow-point" points="713.04 794.9 721.85 801.65 730.65 794.9"/>
								<line id="down-arrow-line" x1="721.85" y1="801.65" x2="721.85" y2="781.67"/>
							</g>
							<!-- <g class="down-arrow-text">
								<path d="M622.5,768.17a3.49,3.49,0,0,1-1.36-1.39,3.63,3.63,0,0,1-.46-1.78v0h1.22V765a2.73,2.73,0,0,0,.29,1.22,2.48,2.48,0,0,0,.92,1,2.82,2.82,0,0,0,1.6.42,3,3,0,0,0,1.91-.6,1.94,1.94,0,0,0,.76-1.61,1.68,1.68,0,0,0-.54-1.33,2.89,2.89,0,0,0-1.39-.64l-1.71-.33a4.92,4.92,0,0,1-1.84-.79,2.31,2.31,0,0,1-.91-2.09,3,3,0,0,1,.44-1.65,3,3,0,0,1,1.28-1.1,4.28,4.28,0,0,1,1.87-.39,4.14,4.14,0,0,1,2.09.49,3.47,3.47,0,0,1,1.29,1.29,3.38,3.38,0,0,1,.43,1.64v0h-1.21v0a2.68,2.68,0,0,0-.25-1.06,2.27,2.27,0,0,0-.83-1,2.68,2.68,0,0,0-1.55-.4,2.57,2.57,0,0,0-1.79.6,2,2,0,0,0-.65,1.53,1.67,1.67,0,0,0,.48,1.23,2.59,2.59,0,0,0,1.36.65l1.51.29q3.09.63,3.09,3a3,3,0,0,1-.48,1.68,3.22,3.22,0,0,1-1.35,1.17,4.48,4.48,0,0,1-2,.43A4.11,4.11,0,0,1,622.5,768.17Z" transform="translate(0.85 0.5)"/>
								<path d="M639,757.39v11.2h-1.1v-5.18H631.8v5.18h-1.1v-11.2h1.1v5.1h6.08v-5.1Z" transform="translate(0.85 0.5)"/>
								<path d="M648.14,765.17h-4.82L642,768.59h-1.12l4.26-11.2h1.07l4.3,11.2h-1.12Zm-.34-.92-2.06-5.44h-.07l-2,5.44Z" transform="translate(0.85 0.5)"/>
								<path d="M655.74,764h-2.18v4.61h-1.1v-11.2h3.69a4.45,4.45,0,0,1,2.24.49,3,3,0,0,1,1.23,1.25,3.48,3.48,0,0,1,.37,1.57,3.15,3.15,0,0,1-3,3.23l3.1,4.66h-1.23Zm-2.18-1H656a3.79,3.79,0,0,0,2.05-.53,2,2,0,0,0,.83-1.79,1.93,1.93,0,0,0-.83-1.78,3.78,3.78,0,0,0-2.05-.52h-2.48Z" transform="translate(0.85 0.5)"/>
								<path d="M663.54,758.4v4h5v.93h-5v4.25h5.64v1h-6.74v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
								<path d="M682.58,758.4h-3.39v10.19h-1.1V758.4H674.7v-1h7.88Z" transform="translate(0.85 0.5)"/>
								<path d="M692.78,757.39v11.2h-1.11v-5.18h-6.08v5.18h-1.1v-11.2h1.1v5.1h6.08v-5.1Z" transform="translate(0.85 0.5)"/>
								<path d="M696.55,758.4v4h5v.93h-5v4.25h5.63v1h-6.73v-11.2h6.73v1Z" transform="translate(0.85 0.5)"/>
								<path d="M716.89,761.49l-.67,3.07H719l-.2.88H716l-.67,3.15h-1v-.19l.64-3h-3.15l-.67,3.15h-1v-.19l.64-3h-2.61l.19-.88h2.61l.66-3.07h-2.9l.19-.89h2.9l.69-3.21h1v.19l-.66,3h3.15l.71-3.21h.94v.19l-.66,3h2.52l-.2.89Zm-1,0h-3.16l-.67,3.07h3.15Z" transform="translate(0.85 0.5)"/>
								<path d="M721.22,757.39h1.11l2.67,10h.1l3.29-10h1l3.28,10h.09l2.69-10h1.1l-3,11.2H732l-3-9.31h-.09l-3,9.31h-1.56Z" transform="translate(0.85 0.5)"/>
								<path d="M738.23,757.39h1.62l3.61,9.12h0l3.62-9.12h1.61v11.2h-1.08v-9.42h-.08l-3.67,9.42h-.85l-3.66-9.42h-.08v9.42h-1.09Z" transform="translate(0.85 0.5)"/>
								<path d="M751.4,757.39h4.42a3.48,3.48,0,0,1,1.84.44,2.5,2.5,0,0,1,1,1.09,3.1,3.1,0,0,1,.3,1.32,2.38,2.38,0,0,1-.33,1.27,2.6,2.6,0,0,1-.78.83,2.1,2.1,0,0,1-.83.36v.08a2.89,2.89,0,0,1,1,.29,2.6,2.6,0,0,1,1,.84,2.45,2.45,0,0,1,.44,1.5,3.39,3.39,0,0,1-.36,1.51,3,3,0,0,1-1.12,1.2,3.6,3.6,0,0,1-1.91.47H751.4Zm4.1,5a2.77,2.77,0,0,0,1.67-.53,1.84,1.84,0,0,0,.71-1.57,1.69,1.69,0,0,0-.67-1.48,3,3,0,0,0-1.71-.47h-3v4Zm.24,5.23a3.21,3.21,0,0,0,1.88-.52,1.93,1.93,0,0,0,.74-1.69,1.83,1.83,0,0,0-.74-1.64,3.43,3.43,0,0,0-1.88-.49h-3.27v4.34Z" transform="translate(0.85 0.5)"/>
								<path d="M762.5,758.4v4h5v.93h-5v4.25h5.64v1H761.4v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
								<path d="M771.62,758.4v4h5v.93h-5v4.25h5.64v1h-6.74v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
								<path d="M789.78,767.58v1h-6.46l0-11.2h1.12v10.19Z" transform="translate(0.85 0.5)"/>
								<path d="M792.68,768a4.68,4.68,0,0,1-1.73-2,7.84,7.84,0,0,1,0-6,5,5,0,0,1,7.12-2,4.63,4.63,0,0,1,1.73,2,7.17,7.17,0,0,1,.6,3,7,7,0,0,1-.6,3,4.72,4.72,0,0,1-1.73,2,5.42,5.42,0,0,1-5.4,0Zm4.76-.91a3.76,3.76,0,0,0,1.34-1.66,6,6,0,0,0,.48-2.48,5.93,5.93,0,0,0-.48-2.46,3.82,3.82,0,0,0-1.34-1.68,3.82,3.82,0,0,0-4.11,0,3.91,3.91,0,0,0-1.35,1.68,6.73,6.73,0,0,0,0,4.94,3.85,3.85,0,0,0,1.35,1.66,3.87,3.87,0,0,0,4.11,0Z" transform="translate(0.85 0.5)"/>
								<path d="M801.42,757.39h1.12l3.58,10.13h.09l3.59-10.13h1.12L807,768.59h-1.6Z" transform="translate(0.85 0.5)"/>
								<path d="M813.69,758.4v4h5v.93h-5v4.25h5.63v1h-6.74v-11.2h6.74v1Z" transform="translate(0.85 0.5)"/>
							</g> -->
						<!-- </svg>
					</div>
					<div class="content sectionContent">   
						<h2><!-- ?php echo $title;?></h2>  
						<div class="partner-content-inner-container">
							<div class="text-container">
								<img class="text-image textImage" src="<!-- ?php echo get_template_directory_uri(); ?>/dist/images/karma-logo-hroizontal-color.png" alt="Logo">
								<!-- ?php echo $body;?>
							</div>
							<div class="image-container imageContainer">	
								<svg id="clipped-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
									<defs>
									<clipPath id="partnerClip">
										<path id="partnerClipStart"  d="M500,500h0"/>
										<path id="partnerClipEnd" d="M499,5,929,251.93V747.24L500,995,71,747.24V252.14L499,5"/>
									</clipPath>
									</defs>
									<image 
										width="100%" 
										height="100%" 
										xlink:href="<!-- ?php echo $insetImage['url'];?>" 
										clip-path="url(#partnerClip)"
									/>
								</svg>
							</div>
							
						</div>
					</div>
					<!-- ?php if( have_rows('social') ): ?>
					<!-- ?php while( have_rows('social') ): the_row(); 
						$footer = get_sub_field('footer_text');
					?>	
						<div class="footer-area footerArea">
							<!-- ?php echo $footer;?>
						</div>
					<!-- ?php endwhile;endif;?>
				</section>
			<!-- ?php endwhile;endif;?> -->
		</main>
	<?php endwhile; ?>
<?php get_footer(); ?>
