"use client"

import React from 'react'
import { useState,useRef } from 'react'

// var ins = this;
// //スクロールが200に達したらボタン表示
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('#to_top').fadeIn(300);
//     } else {
//         $('#to_top').fadeOut(300);
//     }
// });
// //スクロールトップ
// $('#to_top').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 200);
//     return false;
// });

const ScrollButton = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        scrollRef.current && scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        console.log(scrollRef.current)
        console.log(window.scrollY)
    }
  return (
    <div ref={scrollRef}>
        {window.scrollY >= 0 && 
            <button 
                onClick={handleScroll}
                className='fixed bottom-20 right-20 z-30'
            >
                    スクロール！
                
            </button>
        }
    </div>
  )
}

export default ScrollButton