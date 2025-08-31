import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Twitter, Send, MessageCircle } from "lucide-react"

export default function CukeCoinPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern-dark.png')] opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-between mb-8">
            <div className="text-2xl font-bold text-blue-300">BUKE</div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Twitter className="w-4 h-4 mr-1" />
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-1" />
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="w-4 h-4 mr-1" />
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                SWAP NOW
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-31_19-30-14-removebg-preview-iivUhZrTGUrbkM1CG01wm6lIz2tDwT.png"
              alt="BUKE Blue Cucumber Mascot"
              className="mx-auto mb-4 w-32 h-32"
            />
            <h1 className="text-6xl font-bold mb-4 text-blue-300">$BUKE</h1>
          </div>

          <div className="bg-blue-600 text-white p-4 rounded-lg inline-block mb-8">
            <div className="text-sm font-medium mb-1">BASE ADDRESS</div>
            <div className="flex items-center gap-2 font-mono text-sm">
              <span>COMING SOON</span>
              <Button size="sm" variant="ghost" className="p-1 h-auto text-white hover:bg-blue-700">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="text-4xl font-bold text-blue-300 mb-4">BUKE BUKE BUKE BUKE BUKE</div>
        </div>
      </header>

      {/* Beyond The Ordinary Section */}
      <section className="py-16 bg-blue-400">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6 text-balance">BEYOND THE ORDINARY</h2>
              <Card className="bg-white p-6 mb-8">
                <CardContent className="p-0">
                  <p className="text-black text-lg leading-relaxed">
                    Not just a cucumber, not just a joke. BUKE is a cucumber that flips the script, defies expectations,
                    and keeps rolling forward—turning every doubt into fuel for the next surprise.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pose_9-9f3iuG4fdt7LkgQ3zm69UjjKjqfwnG.png"
                alt="BUKE Blue Cucumber Character Relaxing"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* DEX Screener Mockup */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">DEXSCREENER - BASE</h3>
            <Card className="bg-white p-6">
              <CardContent className="p-0">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="grid grid-cols-8 gap-4 text-sm font-medium text-gray-600 mb-4">
                    <div>Token</div>
                    <div>Price</div>
                    <div>24h %</div>
                    <div>6h %</div>
                    <div>1h %</div>
                    <div>5m %</div>
                    <div>Volume</div>
                    <div>Market Cap</div>
                  </div>
                  {[
                    {
                      name: "BUKE",
                      price: "$0.00234",
                      change24h: "+234.5%",
                      change6h: "+45.2%",
                      change1h: "+12.3%",
                      change5m: "+2.1%",
                      volume: "$2.3M",
                      mcap: "$45.6M",
                    },
                    {
                      name: "PEPE",
                      price: "$0.00001",
                      change24h: "+12.3%",
                      change6h: "+5.2%",
                      change1h: "+1.3%",
                      change5m: "+0.1%",
                      volume: "$12.3M",
                      mcap: "$145.6M",
                    },
                    {
                      name: "BONK",
                      price: "$0.00002",
                      change24h: "+8.7%",
                      change6h: "+2.1%",
                      change1h: "+0.8%",
                      change5m: "-0.2%",
                      volume: "$8.7M",
                      mcap: "$87.3M",
                    },
                  ].map((token, i) => (
                    <div key={i} className="grid grid-cols-8 gap-4 text-sm py-2 border-b">
                      <div className="font-medium">{token.name}</div>
                      <div>{token.price}</div>
                      <div className="text-green-600">{token.change24h}</div>
                      <div className="text-green-600">{token.change6h}</div>
                      <div className="text-green-600">{token.change1h}</div>
                      <div className="text-green-600">{token.change5m}</div>
                      <div>{token.volume}</div>
                      <div>{token.mcap}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Tasks Section */}
      <section className="py-16 bg-blue-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">BUKE DAILY TASK</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pose_7-removebg-preview-ORNXAaumtNBsabohmNkCNPCTxkt3cw.png"
                  alt="BUKE using phone"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="bg-black rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pose_4-removebg-preview-hqGqlcSAYNu4PHo5qrXVcnmJpcHNcs.png"
                  alt="BUKE reading book"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            <Card className="bg-black rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pose_3-removebg-preview-v4T2SbKrFtlqxz5wrFFNCVAt6B28EE.png"
                  alt="BUKE eating burger"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 bg-blue-400">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pose_8-removebg-preview-lLr2InWzM4vbb14eKmQa6PlVeyEYvl.png"
                alt="BUKE Blue Cucumber with Beer"
                className="w-full"
              />
            </div>
            <div>
              {/* Made BUKE TOKENOMICS text blue */}
              <h2 className="text-5xl font-bold text-blue-300 mb-8 text-balance">BUKE TOKENOMICS</h2>
              <div className="grid grid-cols-2 gap-4">
                <Badge className="bg-white text-black text-lg p-4 rounded-full font-bold">1 BILLION SUPPLY</Badge>
                <Badge className="bg-white text-black text-lg p-4 rounded-full font-bold">ZERO TAX</Badge>
                <Badge className="bg-white text-black text-lg p-4 rounded-full font-bold">100% LP BURN</Badge>
                <Badge className="bg-white text-black text-lg p-4 rounded-full font-bold">BASE CHAIN</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Made THE GREEN SIDE AWAITS text blue */}
              <h2 className="text-5xl font-bold text-blue-300 mb-6 text-balance">THE GREEN SIDE AWAITS</h2>
              <Card className="bg-white text-black p-6 mb-8">
                <CardContent className="p-0">
                  <p className="text-lg leading-relaxed">
                    Behind every meme is a community, and behind every community is the force that pushes BUKE the
                    cucumber further than anyone ever imagined possible.
                  </p>
                </CardContent>
              </Card>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Twitter className="w-4 h-4 mr-2" />
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="w-4 h-4 mr-2" />
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pose_6-removebg-preview-yeoJic2eZx3213PmMqhN89KNxpYLtC.png"
                alt="BUKE Blue Cucumber Smoking Cigar"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-blue-700">
          <div className="text-4xl font-bold text-blue-300 mb-4">BUKE BUKE BUKE BUKE BUKE</div>
          <p className="text-blue-200">BUKECOIN © 2025</p>
        </div>
      </section>
    </div>
  )
}
