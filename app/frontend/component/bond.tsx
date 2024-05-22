import Image from 'next/image';

const Bond = () => {

return (
    <div className='flex'>
        <span className='flex-1 m-5 mb-0'>
            <Image src={"/bond.png"} alt='Bond' width={150} height={150}/>
        </span>
        <span className='flex-1 place-content-center text-sm'>
            <h1>Bondhon Shahriar Alam</h1>
            <p>Biträdande Rektor</p>
            <p>Mob: +46 76 108 78 89</p>
            <p>Mejl: bondhon.shahriaralam@ntig.se</p>
        </span>
    </div>
);

}

export default Bond;