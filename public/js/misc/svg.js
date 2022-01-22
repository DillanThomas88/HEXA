const diceArr = [
    `<svg data-die="1"  class=" pointer-events-none fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <g>
     <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
     <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
    </g>
   </svg>`,
    `<svg data-die="2" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
   <g>
    <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
    <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
    <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
   </g>
  </svg>`,
    `<svg data-die="3" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <g>
   <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
   <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
   <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
   <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
  </g>
 </svg>`,
    `<svg data-die="4" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
 <g>
  <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
  <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
  <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
  <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
  <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 </g>
</svg>`,
    `<svg data-die="5" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<g>
 <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
 <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
 <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
 <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
 <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 <path d="m72.23 64c0 4.543-3.6875 8.2305-8.2305 8.2305s-8.2305-3.6875-8.2305-8.2305 3.6875-8.2305 8.2305-8.2305 8.2305 3.6875 8.2305 8.2305"/>
</g>
</svg>`,
    `<svg data-die="6" class=" fill-zinc-100" width="44pt" height="44pt" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
<g>
 <path d="m88.688 14.629c13.613 0 24.688 11.074 24.688 24.688v49.371c0 13.613-11.074 24.688-24.688 24.688l-49.375-0.003906c-13.613 0-24.688-11.074-24.688-24.688l0.003906-49.371c0-13.613 11.074-24.688 24.688-24.688l49.371 0.003906m0-8.2305h-49.375c-18.176 0-32.914 14.738-32.914 32.914v49.371c0 18.18 14.738 32.918 32.914 32.918h49.371c18.18 0 32.918-14.738 32.918-32.914v-49.375c0-18.176-14.738-32.914-32.914-32.914z"/>
 <path d="m47.543 39.312c0 4.5469-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6836-8.2266-8.2305 0-4.543 3.6836-8.2266 8.2266-8.2266 4.5469 0 8.2305 3.6836 8.2305 8.2266"/>
 <path d="m96.914 88.688c0 4.543-3.6836 8.2266-8.2266 8.2266-4.5469 0-8.2305-3.6836-8.2305-8.2266 0-4.5469 3.6836-8.2305 8.2305-8.2305 4.543 0 8.2266 3.6836 8.2266 8.2305"/>
 <path d="m96.914 39.312c0 4.5469-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6836-8.2305-8.2305 0-4.543 3.6836-8.2266 8.2305-8.2266 4.543 0 8.2266 3.6836 8.2266 8.2266"/>
 <path d="m47.543 88.688c0 4.543-3.6836 8.2266-8.2305 8.2266-4.543 0-8.2266-3.6836-8.2266-8.2266 0-4.5469 3.6836-8.2305 8.2266-8.2305 4.5469 0 8.2305 3.6836 8.2305 8.2305"/>
 <path d="m47.543 64c0 4.543-3.6836 8.2305-8.2305 8.2305-4.543 0-8.2266-3.6875-8.2266-8.2305s3.6836-8.2305 8.2266-8.2305c4.5469 0 8.2305 3.6875 8.2305 8.2305"/>
 <path d="m96.914 64c0 4.543-3.6836 8.2305-8.2266 8.2305-4.5469 0-8.2305-3.6875-8.2305-8.2305s3.6836-8.2305 8.2305-8.2305c4.543 0 8.2266 3.6875 8.2266 8.2305"/>
</g>
</svg>`
]


const questionmarkEL = `                    <div class="z-0 pointer-events-none border opacity-0 border-zinc-100 border-4 w-14 h-14 rounded-xl"></div>
<svg class="opacity-5 pointer-events-none absolute h-12 w-auto pt-2 fill-zinc-100" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <g>
     <path d="m94.719 41.215c-0.64062-16.258-13.312-29.441-29.441-30.719-9.0898-0.76953-18.047 2.3047-24.574 8.4492-6.3984 6.0156-9.9844 14.207-9.9844 23.039 0 4.2227 3.457 7.6797 7.6797 7.6797 4.2227 0 7.6797-3.457 7.6797-7.6797 0-4.4805 1.793-8.7031 5.1211-11.777 3.457-3.1992 8.0625-4.7344 12.93-4.3516 8.3203 0.64062 14.977 7.6797 15.23 16 0.25781 6.2734-2.9453 11.777-8.4492 14.719-9.7266 5.25-15.871 15.617-15.871 27.012 0 4.2227 3.457 7.6797 7.6797 7.6797s7.6797-3.457 7.6797-7.6797c0-5.7617 2.9453-11.008 7.8086-13.566 10.625-5.7617 16.898-16.773 16.512-28.805z"/>
     <path d="m74.238 106.88c0 5.6562-4.582 10.242-10.238 10.242s-10.238-4.5859-10.238-10.242 4.582-10.238 10.238-10.238 10.238 4.582 10.238 10.238"/>
    </g>
   </svg>`

const locked = `<svg class="fill-zinc-600 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20">
<path
    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
</svg> LOCKED`