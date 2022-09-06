from bs4 import BeautifulSoup as bs


class HTMLGenerator:
    def __init__(self, content):
        self.content = content

    def render(self):
        # convert the string to a BeautifulSoup object
        soup = bs(str(self.content), 'html.parser')
        # return the BeautifulSoup object
        return soup.prettify()


class BaseTag:
    def __init__(self, *args, **kwargs):
        self.content = args
        self.kwargs = kwargs
        self.children = []  
        self.tag = self.__class__.__name__.lower()

    def get_tag(self, tag):
        self.tag = tag

    def __str__(self):
        return self.render()

    def render_attributes(self):
        return ' '.join(['{}="{}"'.format(k, v) for k, v in self.kwargs.items()])

    def render(self):
        return self.render_start() + self.render_content() + self.render_end()

    def render_start(self):
        return '<{} {}>'.format(self.tag, self.render_attributes())

    def render_content(self):
        return ''.join(map(str, self.content))

    def render_end(self):
        return '</{}>'.format(self.tag)


class Html(BaseTag):
    pass


class Head(BaseTag):
    pass


class Body(BaseTag):
    pass


class Title(BaseTag):
    pass


class Meta(BaseTag):
    pass


class Link(BaseTag):
    pass


t = HTMLGenerator(
    Html(
        Head(
            Title(
                'My first HTML page'
            ),
            Meta(
                name='description',
                content='This is my first HTML page'
            ),
            Link(
                rel='stylesheet',
                href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            )
        ),
    )
)
print(t.render())
 