export default {

    limitString: (txt: string, limit: number, append = "...") => {
        return (txt ?? "").length <= limit ? txt : (txt.substring(0, limit) + append)
    }
}