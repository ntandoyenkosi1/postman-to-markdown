const fs = require("fs")
function convertJSONtoMarkDown(file) {
    let finalFile = ""
    finalFile = `# ${file.info.name}
${file.info.description}

${file.item.map((x => {
        return `[${x.name}](#${x.name.toLowerCase()})

`
    })).join("")}

${file.item.map((x => {
        let y = x.item.map((z) => {
            let name = z.name
            let method = z.request?.method
            let body = z.request?.body
            let options = {}
            if (body?.options) {
                options.mode = body.mode
                options.language = body.options.raw.language
                body = `\`\`\`${body?.options?.raw?.language}
${body?.raw}
\`\`\`\``
            }
            let path = null
            try{
                path=z.request?.url?.path.map((x => {
                    return `/${x}`
                })).join("")
            }
            catch{
                path=z.request?.url
            }
            return `##### **${method}** ${name}

\`${path}\`

${body ? `**Body** ${options.mode} (${options.language})
${body}` : ""}
`}).join("")
        return `# ${x.name}
${y}`
    })).join("")}`
    return finalFile
}
module.exports = { convertJSONtoMarkDown }