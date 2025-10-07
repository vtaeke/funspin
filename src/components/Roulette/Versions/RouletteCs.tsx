import {useRef, useState} from 'react';
import './RouletteCs.css'
import ak47v1 from '../../../assets/cs2/ak47v1.png'
import deaglebluecobalt from '../../../assets/cs2/deaglebluecobalt.png'
import firedeagle from '../../../assets/cs2/firedeagle.png'
import izumruddragon from '../../../assets/cs2/izumruddragon.png'
import m4sasmurai from '../../../assets/cs2/m4sasmurai.png'
import poverhzakalkaak47 from '../../../assets/cs2/poverhzakalkaak47.png'
import Rollcagefamas from '../../../assets/cs2/Rollcagefamas.png'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function RouletteCs() {
    const arr = [
        {image: ak47v1, title: 'ak47v1'},
        {image: deaglebluecobalt, title: 'deaglebluecobalt'},
        {image: firedeagle, title: 'firedeagle'},
        {image: izumruddragon, title: 'izumruddragon'},
        {image: m4sasmurai, title: 'm4samurai'},
        {image: poverhzakalkaak47, title: 'poverhzakalkaak47'},
        {image: Rollcagefamas, title: 'Rollcagefamas'},
    ]

    const navigate = useNavigate();

    console.log('arr', arr)
    const [isSpinning, setIsSpinning] = useState<boolean>(false);
    const [result, setResult] = useState<string | null>(null);
    const reelRef = useRef<HTMLDivElement>(null)

    const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

    const cardWidth = 200;
    const containerWidth = 900;
    const repeatedArr = Array(50).fill(arr).flat()

    const spinButton = () => {
        if (isSpinning) return
        setIsSpinning(true);
        setResult(null)
        setHighlightIndex(null)

        const finalIndex = Math.floor(Math.random() * arr.length);
        const totalSteps = arr.length * 10 + finalIndex;
        const translateX = -(totalSteps * cardWidth - (containerWidth - cardWidth) / 2);

        if ( reelRef.current) {
            reelRef.current.style.transition = 'transform 2.5s cubic-bezier(0.33, 1, 0.68, 1)'
            reelRef.current.style.transform = `translateX(${translateX}px)`
        }

        setTimeout(() => {
            setHighlightIndex(finalIndex)
            setResult(`🎉 Выпало: ${arr[finalIndex].title}`);
            setIsSpinning(false)

            if (reelRef.current) {
                reelRef.current.style.transition = 'none'
                reelRef.current.style.transform = `translateX(-${finalIndex * cardWidth}px)`
            }
        }, 2500)
    }



    return (
        <div>
            <h2>🎰 Рулетка CS2</h2>
            <Button onClick={() => navigate('/roulette')}>Назад</Button>
            <div className="roulette-container"
                 style={{ width: containerWidth, height: '200px', overflow: 'hidden', margin: '0 auto' }}
            >
                <div className="reel" ref={reelRef} style={{ display: 'flex' }}>
                    {repeatedArr.map((item, idx) => {
                        const isWinner = highlightIndex === idx % arr.length; // выбранный элемент
                        return (
                            <div
                                key={idx}
                                className={`card-cs ${isWinner ? 'winner' : ''}`}

                            >
                                <img src={item.image} alt={item.title} style={{ width: '200px', height: '100px', objectFit: 'cover' }} />
                            </div>
                        );
                    })}
                </div>

            </div>
            <button onClick={spinButton} disabled={isSpinning}>
                {isSpinning ? 'Крутим' : 'Запустить рулетку'}
            </button>
            {result && <div className="result">{result}</div>}
        </div>
    );
}

export default RouletteCs;