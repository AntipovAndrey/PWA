package ru.andrey.pwa

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.support.customtabs.trusted.LauncherActivity
import android.support.v7.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_main.*
import java.net.URI

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        open_twa_button.setOnClickListener {
            startActivity(createIntent())
        }
    }

    private fun createIntent(): Intent {
        var url = BuildConfig.DEFAULT_URL

        with(todo_text.text.toString()) {
            if (isNotBlank()) {
                url = appendQuery(url, "todo=${this}")
            }
        }

        return Intent(this, LauncherActivity::class.java).apply { data = Uri.parse(url) }
    }

    private fun appendQuery(uri: String, appendQuery: String): String {
        val oldUri = URI(uri)
        return URI(oldUri.scheme, oldUri.authority, oldUri.path, appendQuery, oldUri.fragment).toString()
    }
}
