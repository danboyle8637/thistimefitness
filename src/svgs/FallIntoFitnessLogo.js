import React, { useEffect, useRef } from 'react'
import { TweenMax, Power2 } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

const FallIntoFitnessLogo = ({ width, height, className }) => {
  const leftLeafRef = useRef(null)
  const rightLeftRef = useRef(null)
  const leftTimeline = useRef(null)
  const rightTimeline = useRef(null)

  useEffect(() => {
    const leftLeaf = leftLeafRef.current
    const rightLeaf = rightLeftRef.current

    leftTimeline.current = new TimelineMax()
    const leftTl = leftTimeline.current

    rightTimeline.current = new TimelineMax()
    const rightTl = rightTimeline.current

    TweenMax.set(leftLeaf, { y: -30 })
    TweenMax.set(rightLeaf, { y: -30 })

    leftTl.to(leftLeaf, 12, {
      y: 50,
      transformOrigin: '50% 50%',
      rotation: 80,
      yoyo: true,
      yoyoEase: Power2.easeOut,
      repeat: -1,
    })

    rightTl.to(rightLeaf, 10, {
      y: 30,
      transformOrigin: '50% 50%',
      rotation: -120,
      yoyo: true,
      yoyoEase: Power2.easeOut,
      repeat: -1,
      delay: 0.2,
    })
  }, [])

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 525.3 155.46"
    >
      <defs>
        <linearGradient
          id="leftLeafGradient"
          x1="370.65"
          y1="64.88"
          x2="441.47"
          y2="64.88"
          gradientTransform="rotate(-79 310.612 327.506)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ea642c" />
          <stop offset=".17" stopColor="#ea6128" />
          <stop offset=".34" stopColor="#e9581c" />
          <stop offset=".51" stopColor="#e84a08" />
          <stop offset=".57" stopColor="#e74400" />
          <stop offset=".62" stopColor="#e24402" />
          <stop offset=".81" stopColor="#d54306" />
          <stop offset=".99" stopColor="#d14308" />
        </linearGradient>
        <linearGradient
          id="fallIntoFitnessGradient"
          x1="53.25"
          y1="36.58"
          x2="463.65"
          y2="36.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f8f8f8" />
          <stop offset=".1" stopColor="#edf5f6" />
          <stop offset=".26" stopColor="#cfeef1" />
          <stop offset=".48" stopColor="#9fe3e9" />
          <stop offset=".75" stopColor="#5dd4de" />
          <stop offset=".99" stopColor="#19c4d3" />
        </linearGradient>
        <linearGradient
          id="rightLeafGradient"
          x1="500.43"
          y1="174.92"
          x2="581.6"
          y2="174.92"
          gradientTransform="rotate(27.62 510.505 122.526)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffc703" />
          <stop offset=".32" stopColor="#f4ad06" />
          <stop offset=".75" stopColor="#e8900a" />
          <stop offset=".99" stopColor="#e3850b" />
        </linearGradient>
      </defs>
      <g ref={leftLeafRef} id="left-leaf" strokeMiterlimit="10">
        <path
          id="leaf"
          d="M89.19 208.74c-5.1 5.74-12.13 9.95-19.67 9.76-4.77-.12-12.5-1.95-13.23-3.05-.49-.74 2.65-1.83 1.72-3.56-.72-1.33-4.2.05-8.43-.77-2.35-.45-5.74-1.28-6.43-2.38s5.27-4.06 4.78-5.17c-.35-.78-7.38-2.59-10.9-5.28-1.39-1.07-4.25-4.22-4.13-4.84s4-2.37 6-2.56c1.61-.15 3.59-.3 5.23-.43 2.28-.19 5.37-1.6 5.3-2.38s-2.9-3.2-4.15-4.19c-3.57-2.81-7.86-7.18-5.75-11.45a11.16 11.16 0 0 0 3.66 1.1c1.33.18 4.42-.12 5.07-.86.45-.51-.71-2.94-1.17-4.22s-1-2.61-1.57-3.87c-1.47-3.43-1.59-7.09-1.42-10.82.1-2.47 1.56-7.49 2-7.75s6 .52 8.42 1.49a28.64 28.64 0 0 1 9.48 6c1 .94 2.25 2.41 3 3 1.07.87 2.3 2.11 3.39 1.27 1.29-1 1.18-7.95 2.74-7.85a17.22 17.22 0 0 1 3.77 2.22 14.46 14.46 0 0 1 2.75 3.41 14.87 14.87 0 0 1 2.29 5c.23 1.37.51 4 1.84 4.38s2.67-2.43 3.37-3.72 2.06-3.57 2.82-4.83c1.35-2.22 3.26-4.54 4.68-4.77.68-.11 2.08 2.67 2.77 4.6a23.34 23.34 0 0 1 1.5 7.72c.13 2.09-.55 3.47.06 4.28 1.08 1.44 5.25-2.6 5.9-1.86 1.58 1.81-.53 7.65-1.3 9.79-.63 1.76-2 5.25-1.13 5.57 1.64.63 2.27-.61 3.66-.52.56 0 .79 3 .54 4.61-1.6 10.85-7.13 19.55-17.46 22.93z"
          transform="translate(-32.11 -116.01)"
          stroke="#a44118"
          strokeWidth="1.57"
          fill="url(#leftLeafGradient)"
        />
        <path
          id="stem"
          fill="none"
          stroke="#582815"
          strokeLinecap="round"
          strokeWidth="2.75"
          d="M64.99 105.99l-44.1-65.61"
        />
        <path
          id="stem-bottom"
          d="M19.89 81.75s18.83 5.06 28.13-.95 11.35-26.67 11.35-26.67"
          fill="none"
          stroke="#582815"
          strokeLinecap="round"
          strokeWidth="2.75"
        />
        <path
          id="stem-top"
          d="M18.48 63.92s12.3 5.7 18.62 2.44C43.58 63 43.43 47.1 43.43 47.1"
          fill="none"
          stroke="#582815"
          strokeLinecap="round"
          strokeWidth="2.75"
        />
      </g>
      <path
        fill="url(#fallIntoFitnessGradient)"
        d="M70.03 13.84h33.03V0H53.25v72.71h16.78V44.58h30.96V30.74H70.03v-16.9z"
      />
      <path
        d="M157.31 116l-23 72.71h17.44l4-13.19h28.67l4.14 13.19h17.23L182.49 116zm2.18 47.2l10.68-34.55L181 163.21z"
        transform="translate(-32.11 -116.01)"
        fill="url(#fallIntoFitnessGradient)"
      />
      <path
        fill="url(#fallIntoFitnessGradient)"
        d="M196.16 0h-16.79v72.71h48.94v-14.5h-32.15V0zM273.29 58.21h-21.32V0h-16.79v72.71h51.76V13.63h-13.65v44.58z"
      />
      <path
        d="M372.46 158.34c0 6.29 0 7.09.36 13.73l.17 4.61h-.53l-2-4.88c-3.28-8.23-3.46-8.68-6.2-14.79l-12.32-27.37h-22.88v59.08h13.38v-28.61c0-4.43-.18-10.63-.54-18.78h.54l1.85 4.7c3.28 8.59 4.08 10.54 5.67 14.08l13 28.61h23v-59.08h-13.5z"
        transform="translate(-32.11 -116.01)"
        fill="url(#fallIntoFitnessGradient)"
      />
      <path
        fill="url(#fallIntoFitnessGradient)"
        d="M359.48 25.41h15.95v47.3h13.64v-47.3h16.74V13.63h-46.33v11.78z"
      />
      <path
        d="M495.06 144.43c-1.15-6.64-4.34-10.8-9.83-13.19-3.46-1.51-7.35-2-15.68-2a72 72 0 0 0-12.76.88 18.08 18.08 0 0 0-11.25 6.88c-2.92 4.17-3.63 9.22-3.63 24.63a72.81 72.81 0 0 0 .62 12c1.07 6.12 3.46 9.93 8.15 12.58 3.72 2.13 8.24 2.93 17.54 2.93a73.08 73.08 0 0 0 12.75-.89c5.32-1.15 9.31-3.72 11.61-7.44 2.57-4.34 3.19-8.33 3.19-21.7 0-8.11-.18-12.02-.71-14.68zm-14.35 28.35c-1.42 3.72-3.63 4.69-11 4.69-7.62 0-10.1-.44-11.61-2.21-1.86-2.22-2.3-4.78-2.3-14.26 0-13.82.35-15.95 2.74-18.07 1.78-1.6 3.81-2 10-2 7.09 0 9.39.44 10.9 2.22 2.12 2.48 2.39 4.07 2.39 15.85.03 9-.15 11.12-1.12 13.78z"
        transform="translate(-32.11 -116.01)"
        fill="url(#fallIntoFitnessGradient)"
      />
      <g id="fitness" fill="#f8f8f8">
        <path
          id="f-letter"
          d="M102 229.26h30.74V243H102v27.93H85.32v-72.2h49.47v13.74H102z"
          transform="translate(-32.11 -116.01)"
        />
        <path
          id="i-letter"
          d="M159.68 270.94H143v-72.2h16.67z"
          transform="translate(-32.11 -116.01)"
        />
        <path
          id="t-letter"
          d="M202.77 270.94H186.1v-57.81h-19.49v-14.39h56.61v14.39h-20.45z"
          transform="translate(-32.11 -116.01)"
        />
        <path
          id="n-letter"
          d="M299.75 270.94h-28.14L255.7 236c-1.95-4.33-2.92-6.71-6.93-17.21L246.5 213h-.65c.43 9.95.65 17.53.65 22.94v35h-16.35v-72.2h27.93l15.05 33.45c3.35 7.46 3.57 8 7.57 18.07l2.49 6h.65l-.21-5.63c-.44-8.12-.44-9.1-.44-16.78v-35.11h16.56z"
          transform="translate(-32.11 -116.01)"
        />
        <path
          id="e-letter"
          d="M328.55 228.29h32.15v11.8h-32.15v17.1h34.64v13.75h-51.31v-72.2h50.87v13.74h-34.2z"
          transform="translate(-32.11 -116.01)"
        />
        <path
          id="s-letter"
          d="M412.44 220.6c0-8.22-1.62-9.52-11.8-9.52-11.26 0-13.64 1.51-13.64 8.44 0 4.44 1.3 6.5 4.55 7.36 1.51.33 1.51.33 13.2 1.08s15.59 1.52 19.27 3.9c4.66 3 6.28 7.25 6.28 16.78 0 9.31-1.3 14.18-4.76 17.43-4.55 4.22-10.29 5.41-24.79 5.41-17.64 0-23.92-1.73-27.49-7.47-2.28-3.46-3-7.25-3-16.24h15.92v1.3c0 3.9.65 6.06 2.27 7.58s3.25 1.62 13.1 1.62c6.6 0 8.22-.32 10.06-1.73 1.52-1.19 2.28-3.46 2.28-7.25 0-3.14-.54-5.09-2-6.06-1.73-1.41-1.73-1.41-14.83-2.28-11.8-.75-15.15-1.3-18.84-3.14-5.62-2.81-7.9-8.11-7.9-18.4 0-8.66 1.84-14 5.85-16.88 4.65-3.25 10.5-4.33 23.92-4.33 14.72 0 20.68 1.4 24.36 5.73 2.7 3.25 4 7.58 4 13.75 0 .43 0 1.73-.11 2.92z"
          transform="translate(-32.11 -116.01)"
        />
        <path
          id="s-letter-2"
          data-name="s-letter"
          d="M479.45 220.6c0-8.22-1.63-9.52-11.8-9.52-11.26 0-13.64 1.51-13.64 8.44 0 4.44 1.3 6.5 4.54 7.36 1.52.33 1.52.33 13.21 1.08s15.59 1.52 19.27 3.9c4.65 3 6.28 7.25 6.28 16.78 0 9.31-1.3 14.18-4.77 17.43-4.54 4.22-10.28 5.41-24.79 5.41-17.64 0-23.92-1.73-27.49-7.47-2.27-3.46-3-7.25-3-16.24h15.91v1.3c0 3.9.65 6.06 2.28 7.58s3.24 1.62 13.09 1.62c6.61 0 8.23-.32 10.07-1.73 1.51-1.19 2.27-3.46 2.27-7.25 0-3.14-.54-5.09-2-6.06-1.73-1.41-1.73-1.41-14.83-2.28-11.79-.75-15.15-1.3-18.83-3.14-5.63-2.81-7.9-8.11-7.9-18.4 0-8.66 1.84-14 5.84-16.88 4.66-3.25 10.5-4.33 23.93-4.33 14.72 0 20.67 1.4 24.35 5.73 2.71 3.25 4 7.58 4 13.75 0 .43 0 1.73-.11 2.92z"
          transform="translate(-32.11 -116.01)"
        />
      </g>
      <g
        ref={rightLeftRef}
        id="right-leaf"
        stroke="#572e0c"
        strokeMiterlimit="10"
      >
        <path
          id="leaf-2"
          data-name="leaf"
          d="M481.18 206.91c-5.67-3.4-9.68-8.93-13.54-14.31 4.37-1.95 9.11-3 13.48-4.94-4.52-12.19-3.16-27.44 4.16-38.18A39 39 0 0 1 504.66 168a39.42 39.42 0 0 1 25-16.8 55.28 55.28 0 0 1 1.48 30 74.3 74.3 0 0 1 25.55 5.51 40.87 40.87 0 0 1-28.35 25.9c2.5 4.05 3.26 9 3 13.78A26.36 26.36 0 0 1 512 223c-4.8-2.88-9-6.78-10.8-12.42-.16-.51-.45-3.22-.78-3.4a8.27 8.27 0 0 0-2.46 1 12.55 12.55 0 0 1-1.63.74 15.63 15.63 0 0 1-7.15.77 19.82 19.82 0 0 1-8-2.78z"
          transform="translate(-32.11 -116.01)"
          strokeWidth="1.13"
          fill="url(#rightLeafGradient)"
        />
        <path
          id="stem-2"
          data-name="stem"
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.27"
          d="M458.62 109.55l24.55-46.91"
        />
        <path
          id="stem-left"
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.27"
          d="M479.1 86.33l-5.14-5.68-6.81-16.36"
        />
        <path
          id="stem-right"
          fill="none"
          strokeLinecap="round"
          strokeWidth="2.27"
          d="M466.87 79.51l7.09 1.14 16.81-3.58"
        />
      </g>
    </svg>
  )
}

export default FallIntoFitnessLogo
