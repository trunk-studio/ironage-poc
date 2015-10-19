import com.sun.jna.platform.FileUtils;

import java.io.File;
import java.io.IOException;

public class Hello {
    public static void main(String args[]) {

        File[] files;
        files = new File[1];
        files[0] = new File("/tmp/test");

        try {
            FileUtils.getInstance().moveToTrash(files);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
