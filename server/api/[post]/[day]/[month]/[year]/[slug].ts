export default defineEventHandler(async (event) => {
    const {day, month, year, slug} = event.context.params
    const uri = `https://tortacms-back.vercel.app/api/post/${day}/${month}/${year}/${slug}`
    const res = await fetch(uri);
    const data = await res.json()
    return data
})