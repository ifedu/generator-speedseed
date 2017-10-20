import { paths, Task } from 'root/core/seed'

console.log(`${paths.yo.coreName} v.${paths.yo.coreVersion} with ${paths.yo.tplName} v.${paths.yo.tplVersion}`)

Task.readTasks(paths.tasks.dir.primary)
Task.readTasks(paths.tasks.dir.secondary)

Task.readTasks(paths.tasks.dir.config)
