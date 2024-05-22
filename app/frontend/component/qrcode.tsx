import { useQRCode } from 'next-qrcode';

function QrCode() {
  const { Canvas } = useQRCode();

  return (
    <div className="flex justify-center m-5">
    <Canvas
      text={'https://github.com/bunlong/next-qrcode'}
      options={{
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFFFFFF0',
        },
      }}
    />
    </div>
  );
}

export default QrCode;