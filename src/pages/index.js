import Image from 'next/image'
import Background from '../../public/images/background.png'
import LaunchBtn from '../../public/images/launch_btn.png'
import HoverBtn from '../../public/images/hover_btn.png'

export default function Page() {
    return (
        <div>
            <div className='landing'>
                <Image src={Background} alt="background" className='bg-pic' loading='lazy' />
                <a href='https://shadow-trading-client.vercel.app/my-trade' className='launch-link'>
                    <Image src={LaunchBtn} alt="launch button" loading='lazy'/>
                </a>
            </div>
        </div>
    );
}