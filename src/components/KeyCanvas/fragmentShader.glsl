varying vec3 vColor; 

void main()
{
  vec2 uv = gl_PointCoord; 
  float distanceToCenter = length(uv - vec2(0.5));

  float alpha = step(0.5, distanceToCenter);
  alpha = 1.0 - alpha; // 내부를 불투명하게 유지하고 외곽을 투명하게 설정

  gl_FragColor = vec4(vColor, alpha);
}