export default function Arc3() {
  return (
    <svg width="1764" height="1764" viewBox="0 0 1764 1764">
  <defs>
    <filter id="layerBlur" filterUnits="userSpaceOnUse"
            x="-1000" y="-1000" width="3764" height="3764">
      <feGaussianBlur in="SourceGraphic" stdDeviation="250" />
    </filter>
  </defs>

  <g filter="url(#layerBlur)" opacity="0.4">
    <circle
      cx="800"
      cy="600"
      r="687.96"
      fill="none"
      stroke="#B775D5"
      strokeWidth="388.08"
      strokeLinecap="round"
      strokeDasharray="3828.94 493.64"
      transform="rotate(180 800 882)"
    />
  </g>
</svg>

  );
}
