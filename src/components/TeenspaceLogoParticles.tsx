import { useEffect, useRef } from 'react'

export default function TeenspaceLogoParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    // Particle definition
    interface Particle {
      x: number
      y: number
      targetX: number
      targetY: number
      size: number
      color: string
      angle: number
      spinSpeed: number
      speed: number
      opacity: number
    }

    const colors = [
      '#8052ff', // Electric Iris
      '#ffb829', // Saffron Spark
      '#15846e', // Deep Verdant
      '#ff4593', // Magenta
      '#00d4ff', // Cyan
    ]

    const particles: Particle[] = []
    const particleCount = 1200

    // Check if point is inside Pink Speech Bubble
    // SVG values normalized to canvas dimensions
    const isInsidePinkBubble = (px: number, py: number, cx: number, cy: number, scale: number) => {
      // Pink Rect: x="4", y="6", width="34", height="30" (relative to 60x48 viewBox)
      const rx = cx + 4 * scale
      const ry = cy + 6 * scale
      const rw = 34 * scale
      const rh = 30 * scale

      // Simple box check (ignoring rx corner for simplicity, or we can check corners)
      if (px >= rx && px <= rx + rw && py >= ry && py <= ry + rh) {
        return true
      }
      // Pink Triangle: M8 36 L2 46 L20 36 Z
      // Approximate check
      const tx1 = cx + 8 * scale
      const ty1 = cy + 36 * scale
      const tx2 = cx + 2 * scale
      const ty2 = cy + 46 * scale
      const tx3 = cx + 20 * scale
      const ty3 = cy + 36 * scale

      // Simple barycentric check for triangle
      const area = 0.5 * (-ty2 * tx3 + ty1 * (-tx2 + tx3) + tx1 * (ty2 - ty3) + tx2 * ty3)
      const s = 1 / (2 * area) * (ty1 * tx3 - tx1 * ty3 + (ty3 - ty1) * px + (tx1 - tx3) * py)
      const t = 1 / (2 * area) * (tx1 * ty2 - ty1 * tx2 + (ty1 - ty2) * px + (tx2 - tx1) * py)
      const u = 1 - s - t
      return s >= 0 && t >= 0 && u >= 0
    }

    // Check if point is inside Blue Speech Bubble
    const isInsideBlueBubble = (px: number, py: number, cx: number, cy: number, scale: number) => {
      // Blue Rect: x="22", y="0", width="34", height="30"
      const rx = cx + 22 * scale
      const ry = cy + 0 * scale
      const rw = 34 * scale
      const rh = 30 * scale

      if (px >= rx && px <= rx + rw && py >= ry && py <= ry + rh) {
        return true
      }
      // Blue Triangle: M50 30 L56 40 L42 30 Z
      const tx1 = cx + 50 * scale
      const ty1 = cy + 30 * scale
      const tx2 = cx + 56 * scale
      const ty2 = cy + 40 * scale
      const tx3 = cx + 42 * scale
      const ty3 = cy + 30 * scale

      const area = 0.5 * (-ty2 * tx3 + ty1 * (-tx2 + tx3) + tx1 * (ty2 - ty3) + tx2 * ty3)
      const s = 1 / (2 * area) * (ty1 * tx3 - tx1 * ty3 + (ty3 - ty1) * px + (tx1 - tx3) * py)
      const t = 1 / (2 * area) * (tx1 * ty2 - ty1 * tx2 + (ty1 - ty2) * px + (tx2 - tx1) * py)
      const u = 1 - s - t
      return s >= 0 && t >= 0 && u >= 0
    }

    // Initialize particles
    const init = () => {
      particles.length = 0
      
      // Calculate layout properties
      // Place the logo centered or slightly offset to the right as in Dala
      const isMobile = width < 768
      const scale = isMobile ? Math.min(width, height) * 0.008 : Math.min(width, height) * 0.009
      const logoW = 60 * scale
      const logoH = 48 * scale
      const cx = isMobile ? width - logoW * 0.75 : width * 0.6
      const cy = isMobile ? height * 0.55 : (height - logoH) / 2

      for (let i = 0; i < particleCount; i++) {
        let tx = 0
        let ty = 0
        let found = false

        // Generate points that map inside the logo structure
        let attempts = 0
        while (!found && attempts < 500) {
          attempts++
          // Check box enclosing both speech bubbles
          // Min X is 2, Max X is 56, Min Y is 0, Max Y is 46
          const rx = cx + Math.random() * (56 * scale)
          const ry = cy + Math.random() * (46 * scale)

          if (isInsidePinkBubble(rx, ry, cx, cy, scale) || isInsideBlueBubble(rx, ry, cx, cy, scale)) {
            tx = rx
            ty = ry
            found = true
          }
        }

        // If not found (fallback), pick a random coordinate
        if (!found) {
          tx = cx + Math.random() * logoW
          ty = cy + Math.random() * logoH
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          targetX: tx,
          targetY: ty,
          size: Math.random() * 4 + 2, // 2-6px triangles
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() - 0.5) * 0.05,
          speed: Math.random() * 0.02 + 0.015,
          opacity: Math.random() * 0.4 + 0.5,
        })
      }
    }

    init()

    // Draw little triangles for the constellation look
    const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, angle: number, color: string, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.beginPath()
      const r = size
      ctx.moveTo(0, -r)
      ctx.lineTo(r * 0.86, r * 0.5)
      ctx.lineTo(-r * 0.86, r * 0.5)
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.globalAlpha = opacity
      ctx.stroke()
      ctx.restore()
    }

    // Animation Loop
    const animate = () => {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      // Mouse interactive displacement (subtle)
      // Drift/animate particles back to targets
      particles.forEach((p) => {
        // Move towards target position
        p.x += (p.targetX - p.x) * p.speed
        p.y += (p.targetY - p.y) * p.speed
        
        // Spin
        p.angle += p.spinSpeed

        // Add small organic floating noise
        p.x += Math.sin(Date.now() * 0.001 + p.targetY) * 0.15
        p.y += Math.cos(Date.now() * 0.001 + p.targetX) * 0.15

        drawTriangle(ctx, p.x, p.y, p.size, p.angle, p.color, p.opacity)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  )
}
