uniform vec2 uResolution;
uniform float uSize;
uniform vec3 uColor;

varying vec3 vColor;

void main()
{
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  gl_PointSize = uSize * uResolution.y;
  gl_PointSize *= (1.0 / -viewPosition.z); 

  vColor = uColor;
}