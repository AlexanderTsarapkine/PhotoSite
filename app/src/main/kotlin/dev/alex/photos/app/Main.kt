package dev.alex.photos.app

import dev.alex.photos.infra.Server


class Main {
}

fun main() {
    val server = Server.start()
    println("Server started on http://localhost:9090")
    Thread.currentThread().join()
}