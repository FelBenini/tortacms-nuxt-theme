export default defineEventHandler(async () => {
    const uri = `https://tortacms-back.vercel.app/api/posts`
    const res = await fetch(uri);
    const data = await res.json()
    return data
})