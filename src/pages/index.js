import Image from 'next/image'
import Background from '../../public/images/background.png'
import LaunchBtn from '../../public/images/launch_btn.png'
import HoverBtn from '../../public/images/hover_btn.png'

export default function Page() {
    return (
        <div>
            <div className='landing'>
                <Image src={Background} alt="background" className='bg-pic' />
                <a href='https://channel.sportslottery.com.tw/zh-tw/register/step1?retailerId=93199190' className='launch-link'>
                    f
                    {/* <Image src={LaunchBtn} alt="launch button" className='launch-btn' />
                    <Image src={HoverBtn} alt="hover button" className='hover-btn' /> */}
                </a>
            </div>
        </div>
    );
}