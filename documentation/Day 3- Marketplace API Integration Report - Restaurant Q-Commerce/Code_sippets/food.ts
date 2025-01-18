// Fetching foods data 
const [products, setProducts] = useState<Food[]>([])
useEffect(() => {
    async function getData() {
        const response: Food[] = await client.fetch(`*[_type == "food"]{
        name,
        category,
        price,
        originalPrice,
        tags,
        "image":image.asset->url,
        description,
        available,
        "slug": slug.current
      }`)
        console.log(response)
        setProducts(response)

    }
    getData()

}, [])
//   Integrating Food Data on frontend
{
    products.map((product, index) => (
        <Link key= { index } href = {`/shop/${product.slug}`}>
            <div className="border border-gray-200 rounded cursor-pointer" >
                <div className="relative" >
                    <Image
            src={ product?.image || "" }
alt = { product.name }
height = { 267}
width = { 312}
className = "w-full h-[267px] object-cover rounded"
    />
{
    product.originalPrice && (
        <span className="absolute top-2 right-2 bg-primary_color text-white text-xs px-2 py-1 rounded">
            -{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) } %
            </span>
          )
}